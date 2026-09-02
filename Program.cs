using MerhabaDunya.Repositories;
using MerhabaDunya.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("Frontend", policy =>
        policy.WithOrigins("http://localhost:5173", "http://localhost:5174")
            .AllowAnyHeader()
            .AllowAnyMethod());
});

builder.Services.AddSingleton<IProductRepository, InMemoryProductRepository>();
builder.Services.AddScoped<IProductService, ProductService>();

var app = builder.Build();
app.UseCors("Frontend");

app.MapGet("/", () => new
{
    mesaj = "Mini E-Ticaret API'sine hoş geldiniz!",
    endpoints = new[] { "GET /api/products", "GET /api/products/{id}" }
});

app.MapGet("/api/products", (string? search, string? category, IProductService productService) =>
    Results.Ok(productService.GetProducts(search, category)));

app.MapGet("/api/products/{id:int}", (int id, IProductService productService) =>
{
    var product = productService.GetProductById(id);
    return product is null ? Results.NotFound() : Results.Ok(product);
});

app.Run();