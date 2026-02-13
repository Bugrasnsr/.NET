using MerhabaDunya.Models;

namespace MerhabaDunya.Services;

public interface IProductService
{
    IEnumerable<Product> GetProducts(string? search, string? category);
    Product? GetProductById(int id);
}