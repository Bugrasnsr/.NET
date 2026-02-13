using MerhabaDunya.Models;
using MerhabaDunya.Repositories;

namespace MerhabaDunya.Services;

public class ProductService(IProductRepository productRepository) : IProductService
{
    public IEnumerable<Product> GetProducts(string? search, string? category)
    {
        var products = productRepository.GetAll().AsEnumerable();

        if (!string.IsNullOrWhiteSpace(search))
        {
            products = products.Where(product =>
                product.Name.Contains(search, StringComparison.OrdinalIgnoreCase));
        }

        if (!string.IsNullOrWhiteSpace(category))
        {
            products = products.Where(product =>
                product.Category.Equals(category, StringComparison.OrdinalIgnoreCase));
        }

        return products.OrderBy(product => product.Name);
    }

    public Product? GetProductById(int id) => productRepository.GetById(id);
}