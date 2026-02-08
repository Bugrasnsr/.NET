using MerhabaDunya.Models;

namespace MerhabaDunya.Repositories;

public class InMemoryProductRepository : IProductRepository
{
    private readonly List<Product> products = new()
    {
        new() { Id = 1, Name = "Kablosuz Kulaklık", Category = "Elektronik", Price = 899.90m, Stock = 24 },
        new() { Id = 2, Name = "Mekanik Klavye", Category = "Elektronik", Price = 1249.50m, Stock = 12 },
        new() { Id = 3, Name = "Kanvas Sırt Çantası", Category = "Aksesuar", Price = 549.00m, Stock = 31 },
        new() { Id = 4, Name = "Çelik Termos", Category = "Ev Yaşam", Price = 329.99m, Stock = 18 },
        new() { Id = 5, Name = "Masa Lambası", Category = "Ev Yaşam", Price = 679.00m, Stock = 9 },
        new() { Id = 6, Name = "Koşu Ayakkabısı", Category = "Spor", Price = 1599.00m, Stock = 15 }
    };

    public IEnumerable<Product> GetAll() => products;

    public Product? GetById(int id) => products.FirstOrDefault(product => product.Id == id);
}