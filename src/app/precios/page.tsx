export default function PreciosPage() {
  return (
    <main className="page-container">
      <section className="page-header">
        <h1>Planes y <span className="text-gradient">Precios</span></h1>
        <p className="subtitle">Elige el plan perfecto para tu negocio</p>
      </section>

      <div className="pricing-grid">
        {plans.map((plan) => (
          <div key={plan.id} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
            {plan.popular && <span className="popular-badge">Más Popular</span>}
            <h3>{plan.name}</h3>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">{plan.price}</span>
              <span className="period">/mes</span>
            </div>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>✓ {feature}</li>
              ))}
            </ul>
            <button className={`pricing-button ${plan.popular ? 'primary' : 'secondary'}`}>
              Comenzar Ahora
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}

const plans = [
  {
    id: 1,
    name: "Starter",
    price: "29",
    popular: false,
    features: [
      "100 búsquedas por día",
      "Análisis básico de productos",
      "Datos de ventas estimados",
      "Soporte por email"
    ]
  },
  {
    id: 2,
    name: "Professional",
    price: "79",
    popular: true,
    features: [
      "Búsquedas ilimitadas",
      "Análisis avanzado de productos",
      "Datos en tiempo real",
      "Exportación de datos",
      "Soporte prioritario 24/7"
    ]
  },
  {
    id: 3,
    name: "Enterprise",
    price: "199",
    popular: false,
    features: [
      "Todo lo de Professional",
      "API access",
      "Equipo ilimitado",
      "Reportes personalizados",
      "Gerente de cuenta dedicado"
    ]
  }
] 