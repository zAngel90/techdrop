import Image from "next/image";
import "./globals.css";
import Link from 'next/link'


export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <span className="badge">🚀 PLATAFORMA #1 EN DROPSHIPPING TECH</span>
          <h1>
            Descubre <span className="text-gradient">Productos Tech</span>
            <br /> de Alta Rentabilidad
          </h1>
          <p>
            Analiza las mejores tiendas de tecnología y encuentra productos
            ganadores con datos en tiempo real sobre ventas, ingresos y tendencias.
          </p>
          <div className="cta-group">
            <Link href="/productos" className="cta-button">
              Prueba Gratis
            </Link>
            <Link href="/analytics" className="cta-button-secondary">
              Ver Demo
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-image-wrapper">
            <img 
              src="https://i.imgur.com/ZTYh8Pd.jpg" 
              alt="Audífonos Premium"
              className="product-hero-image"
            />
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stat-card">
          <h3>INGRESOS HOY</h3>
          <p className="amount">$37,369.32</p>
          <span className="trend positive">↑ 12.5%</span>
        </div>
        <div className="stat-card">
          <h3>VENTAS</h3>
          <p className="amount">1,068</p>
          <span className="trend positive">↑ 8.2%</span>
        </div>
        <div className="stat-card">
          <h3>PRODUCTOS ANALIZADOS</h3>
          <p className="amount">15,482</p>
          <span className="badge-blue">Actualizado</span>
        </div>
      </section>

      <section className="quick-access">
        <div className="container">
          <h2>Explora Nuestras Funcionalidades</h2>
          <div className="quick-links">
            <Link href="/productos" className="quick-link-card">
              <h3>Productos Tech</h3>
              <p>Descubre productos trending y análisis de mercado</p>
              <span className="arrow">→</span>
            </Link>
            <Link href="/analytics" className="quick-link-card">
              <h3>Analytics</h3>
              <p>Analiza métricas y tendencias en tiempo real</p>
              <span className="arrow">→</span>
            </Link>
            <Link href="/precios" className="quick-link-card">
              <h3>Planes y Precios</h3>
              <p>Encuentra el plan perfecto para tu negocio</p>
              <span className="arrow">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
