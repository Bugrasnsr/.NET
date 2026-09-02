import type { Product } from '../types/Product'

const API_URL = 'http://localhost:5050/api/products'

export async function getProducts(search: string, category: string): Promise<Product[]> {
  const params = new URLSearchParams()
  if (search.trim()) params.set('search', search.trim())
  if (category !== 'Tümü') params.set('category', category)

  const response = await fetch(`${API_URL}?${params.toString()}`)
  if (!response.ok) throw new Error('Ürünler yüklenemedi.')
  return response.json() as Promise<Product[]>
}