import { useEffect, useState } from 'react'
import './App.css'
import { getProducts } from './services/productService'
import type { Product } from './types/Product'

const categories = ['Tümü', 'Elektronik', 'Aksesuar', 'Ev Yaşam', 'Spor']

function App() {
  const [products, setProducts] = useState<Product[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Tümü')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function loadProducts() {
      try {
        setLoading(true)
        setError('')
        setProducts(await getProducts(search, category))
      } catch {
        setError('Ürünler yüklenemedi. API çalışıyor mu?')
      } finally {
        setLoading(false)
      }
    }

    const timer = window.setTimeout(loadProducts, 250)
    return () => window.clearTimeout(timer)
  }, [search, category])

  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="/">
          <span className="brand-mark">M</span>
          <span>Merhaba Market</span>
        </a>
        <div className="nav-note">Günlük keşifler, tek yerde</div>
        <button className="cart-button" type="button" aria-label="Sepet">
          Sepet <span>0</span>
        </button>
      </nav>

      <section className="hero">
        <div>
          <p className="eyebrow">Yeni sezon / 2026</p>
          <h1>İyi şeyler<br /><em>yakında.</em></h1>
          <p className="hero-copy">Günün ritmine eşlik eden, seçilmiş ürünler.</p>
        </div>
        <div className="hero-stamp">BUL<br />DISCOVER<br />REPEAT</div>
      </section>

      <section className="catalog" aria-label="Ürün kataloğu">
        <div className="catalog-header">
          <div>
            <p className="eyebrow">Katalog</p>
            <h2>Hepsi burada</h2>
          </div>
          <label className="search-box">
            <span aria-hidden="true">⌕</span>
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Ürün ara..." type="search" />
          </label>
        </div>

        <div className="category-list" aria-label="Kategoriler">
          {categories.map((item) => (
            <button className={category === item ? 'category active' : 'category'} key={item} onClick={() => setCategory(item)} type="button">
              {item}
            </button>
          ))}
        </div>

        {loading && <p className="state">Ürünler getiriliyor...</p>}
        {error && <p className="state error">{error}</p>}
        {!loading && !error && products.length === 0 && <p className="state">Aramana uygun ürün bulunamadı.</p>}

        <div className="product-grid">
          {!loading && products.map((product, index) => (
            <article className="product-card" key={product.id}>
              <div className={`product-art art-${(index % 4) + 1}`}>
                <span>{product.category === 'Elektronik' ? '◉' : product.category === 'Spor' ? '↗' : product.category === 'Aksesuar' ? '◇' : '✦'}</span>
                <small>{product.category}</small>
              </div>
              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.stock} adet stokta</p>
                </div>
                <strong>{product.price.toLocaleString('tr-TR', { style: 'currency', currency: 'TRY' })}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
