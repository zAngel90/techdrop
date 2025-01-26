import Image from "next/image";

export default function ProductosPage() {
  return (
    <main className="page-container">
      <section className="page-header">
        <h1>Productos Tech <span className="text-gradient">Trending</span></h1>
        <p className="subtitle">Descubre los productos tecnológicos más vendidos y rentables</p>
      </section>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="product-image">
              <img 
                src={product.image} 
                alt={product.name}
                className="product-img"
              />
              <span className="trend-badge">↑ {product.growth}%</span>
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="product-stats">
                <span>Ventas: {product.sales}</span>
                <span>Precio: ${product.price}</span>
              </p>
              <p className="product-revenue">
                Revenue: <span className="text-primary">${product.revenue}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

const products = [
  {
    id: 1,
    name: "SmartWatch Pro X",
    image: "https://i.imgur.com/im9k8fm.jpg",
    growth: 45,
    sales: "2,345",
    price: "89.99",
    revenue: "210,982"
  },
  {
    id: 2,
    name: "Auriculares ANC Elite",
    image: "https://i.imgur.com/ZTYh8Pd.jpg",
    growth: 32,
    sales: "1,892",
    price: "129.99",
    revenue: "245,851"
  },
  {
    id: 3,
    name: "Drone 4K Ultra",
    image: "https://i.imgur.com/AjkdGus.jpg",
    growth: 28,
    sales: "982",
    price: "299.99",
    revenue: "294,590"
  },
  // Añade más productos aquí
] 