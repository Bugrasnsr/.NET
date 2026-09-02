# Mini E-Ticaret API

Başlangıç seviyesinde hazırlanmış küçük bir ASP.NET Core Web API projesi.

## Çalıştırma

Önce backend'i başlatın:

```bash
dotnet run --urls http://localhost:5050
```

Başka bir terminalde frontend'i başlatın:

```bash
cd Frontend
npm run dev
```

Frontend genellikle `http://localhost:5173` adresinde açılır.

Tarayıcı veya `curl` ile deneyin:

```bash
curl http://localhost:5050/api/products
curl "http://localhost:5050/api/products?category=Elektronik"
curl "http://localhost:5050/api/products?search=kulak"
curl http://localhost:5050/api/products/1
```

Frontend, backend'den ürünleri `fetch` ile alır. Backend'deki CORS ayarı `localhost:5173` adresinden gelen isteklere izin verir.

## Projede kullanılanlar

- **ASP.NET Core Minimal API:** Az kodla HTTP endpoint'i oluşturur.
- **Model:** `Product`, ürünün verilerini (`Id`, `Name`, `Category`, `Price`, `Stock`) temsil eder.
- **LINQ:** `Where`, `OrderBy` ve `FirstOrDefault` ile filtreleme, sıralama ve arama yapılır.
- **SOLID:** Repository ve service sorumlulukları ayrı tutulur. Sınıflar arayüzlere bağlıdır.
- **DI (Dependency Injection):** `Program.cs`, `IProductRepository` ve `IProductService` bağımlılıklarını otomatik olarak sağlar.
- **In-memory veri:** Veritabanı yerine örnek ürünler bellekte tutulur. Uygulama kapanınca veriler sıfırlanır.

## Klasörler

- `Models`: Veri modelleri
- `Repositories`: Ürünleri saklama ve okuma işlemleri
- `Services`: Uygulama kuralları ve LINQ sorguları
- `Program.cs`: DI kayıtları ve endpoint tanımları
- `Frontend/src`: React + TypeScript kullanıcı arayüzü

## Öğrenme sırası

1. Önce `Program.cs` içindeki endpoint'leri inceleyin.
2. `ProductService` içinde LINQ sorgularını değiştirip sonucu gözlemleyin.
3. `InMemoryProductRepository` içine yeni ürün ekleyin.
4. Daha sonra repository yerine bir veritabanı eklemeyi deneyin.