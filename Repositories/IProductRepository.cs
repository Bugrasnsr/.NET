using MerhabaDunya.Models;

namespace MerhabaDunya.Repositories;

public interface IProductRepository
{
    IEnumerable<Product> GetAll();
    Product? GetById(int id);
}