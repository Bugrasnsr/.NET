# Mini E-Ticaret API

Başlangıç seviyesinde hazırlanmış küçük bir ASP.NET Core Web API projesi.

## Çalıştırma

```bash
dotnet run --urls http://localhost:5050
```

Tarayıcı veya `curl` ile deneyin:

```bash
curl http://localhost:5050/api/products
curl "http://localhost:5050/api/products?category=Elektronik"
curl "http://localhost:5050/api/products?search=kulak"
curl http://localhost:5050/api/products/1
```

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

## Öğrenme sırası

1. Önce `Program.cs` içindeki endpoint'leri inceleyin.
2. `ProductService` içinde LINQ sorgularını değiştirip sonucu gözlemleyin.
3. `InMemoryProductRepository` içine yeni ürün ekleyin.
4. Daha sonra repository yerine bir veritabanı eklemeyi deneyin.