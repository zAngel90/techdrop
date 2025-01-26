'use client'
import { useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js'
import { Line, Bar, Doughnut } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
)

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('overview')

  const salesData = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Ventas 2024',
        data: [45678, 52340, 48900, 65780, 59340, 73200],
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(79, 70, 229, 0.1)',
        fill: true,
      },
      {
        label: 'Ventas 2023',
        data: [38900, 42300, 39800, 52400, 54200, 58900],
        borderColor: '#EC4899',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        fill: true,
      },
    ],
  }

  const categoryData = {
    labels: ['Smartwatches', 'Auriculares', 'Drones', 'Cámaras', 'Accesorios'],
    datasets: [
      {
        data: [158900, 124500, 98700, 87600, 45300],
        backgroundColor: [
          '#4F46E5',
          '#7C3AED',
          '#EC4899',
          '#8B5CF6',
          '#6366F1',
        ],
      },
    ],
  }

  const recentOrders = [
    {
      id: '#ORD-001',
      product: 'SmartWatch Pro X',
      customer: 'Juan Pérez',
      date: '2024-03-15',
      status: 'Completado',
      amount: '$299.99',
    },
    {
      id: '#ORD-002',
      product: 'Auriculares ANC Elite',
      customer: 'María García',
      date: '2024-03-15',
      status: 'Pendiente',
      amount: '$159.99',
    },
    {
      id: '#ORD-003',
      product: 'Drone 4K Ultra',
      customer: 'Carlos Rodríguez',
      date: '2024-03-14',
      status: 'Completado',
      amount: '$599.99',
    },
    {
      id: '#ORD-004',
      product: 'Cámara Pro 360',
      customer: 'Ana Martínez',
      date: '2024-03-14',
      status: 'Cancelado',
      amount: '$449.99',
    },
    {
      id: '#ORD-005',
      product: 'SmartWatch Lite',
      customer: 'Luis Torres',
      date: '2024-03-14',
      status: 'Completado',
      amount: '$199.99',
    },
  ]

  const statsData = [
    {
      title: "Ventas Totales",
      value: "$73,200",
      trend: 12.5,
      icon: "📈",
      iconClass: "sales"
    },
    {
      title: "Órdenes",
      value: "1,234",
      trend: 8.2,
      icon: "📦",
      iconClass: "orders"
    },
    {
      title: "Clientes",
      value: "892",
      trend: 5.3,
      icon: "👥",
      iconClass: "customers"
    },
    {
      title: "Conversión",
      value: "3.2%",
      trend: -0.5,
      icon: "🎯",
      iconClass: "conversion"
    }
  ]

  const topProducts = [
    {
      name: "SmartWatch Pro X",
      sales: 245,
      revenue: "$73,255",
      growth: 45
    },
    {
      name: "Auriculares ANC Elite",
      sales: 189,
      revenue: "$30,240",
      growth: 32
    },
    {
      name: "Drone 4K Ultra",
      sales: 156,
      revenue: "$93,444",
      growth: 28
    }
  ]

  const customerStats = {
    new: 124,
    returning: 768,
    churnRate: "2.3%",
    avgLifetime: "$850",
    topLocations: [
      { city: "Madrid", customers: 245 },
      { city: "Barcelona", customers: 198 },
      { city: "Valencia", customers: 156 },
      { city: "Sevilla", customers: 134 },
      { city: "Bilbao", customers: 98 }
    ]
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <div className="stats-grid">
              {statsData.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className={`stat-icon ${stat.iconClass}`}>
                    {stat.icon}
                  </div>
                  <div className="stat-info">
                    <h3>{stat.title}</h3>
                    <p className="stat-value">{stat.value}</p>
                    <span className={`trend ${stat.trend >= 0 ? 'positive' : 'negative'}`}>
                      {stat.trend >= 0 ? '↑' : '↓'} {Math.abs(stat.trend)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="charts-grid">
              <div className="chart-card wide">
                <h3>Tendencia de Ventas</h3>
                <p className="text-gray-600">Comparativa mensual 2023 vs 2024</p>
                <div className="chart-container">
                  <Line data={salesData} options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'top' as const,
                      },
                    },
                    scales: {
                      y: {
                        beginAtZero: true,
                        ticks: {
                          callback: function(value) {
                            return '$' + value.toLocaleString()
                          }
                        }
                      }
                    }
                  }} />
                </div>
              </div>
              <div className="chart-card">
                <h3>Ventas por Categoría</h3>
                <p className="text-gray-600">Total: $515,000</p>
                <div className="chart-container">
                  <Doughnut data={categoryData} options={{
                    responsive: true,
                    plugins: {
                      legend: {
                        position: 'bottom' as const,
                      },
                    },
                  }} />
                </div>
              </div>
            </div>

            <div className="dashboard-grid">
              <div className="dashboard-card">
                <h3>Productos Más Vendidos</h3>
                <div className="top-products">
                  {topProducts.map((product, index) => (
                    <div key={index} className="top-product-item">
                      <div className="product-rank">#{index + 1}</div>
                      <div className="product-details">
                        <h4>{product.name}</h4>
                        <div className="product-stats">
                          <span>{product.sales} ventas</span>
                          <span>{product.revenue}</span>
                          <span className="trend positive">↑ {product.growth}%</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="dashboard-card">
                <h3>Estadísticas de Clientes</h3>
                <div className="customer-stats">
                  <div className="customer-stat-row">
                    <div>
                      <h4>Nuevos Clientes</h4>
                      <p>{customerStats.new}</p>
                    </div>
                    <div>
                      <h4>Clientes Recurrentes</h4>
                      <p>{customerStats.returning}</p>
                    </div>
                  </div>
                  <div className="customer-stat-row">
                    <div>
                      <h4>Tasa de Abandono</h4>
                      <p>{customerStats.churnRate}</p>
                    </div>
                    <div>
                      <h4>Valor de Vida</h4>
                      <p>{customerStats.avgLifetime}</p>
                    </div>
                  </div>
                  <div className="top-locations">
                    <h4>Principales Ubicaciones</h4>
                    {customerStats.topLocations.map((location, index) => (
                      <div key={index} className="location-item">
                        <span>{location.city}</span>
                        <span>{location.customers} clientes</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        )

      case 'orders':
        return (
          <div className="orders-section">
            <div className="section-header">
              <h2>Gestión de Órdenes</h2>
              <div className="header-actions">
                <button className="action-button">Filtrar</button>
                <button className="action-button primary">Nueva Orden</button>
              </div>
            </div>
            <div className="orders-filters">
              <select className="filter-select">
                <option value="all">Todos los estados</option>
                <option value="completed">Completados</option>
                <option value="pending">Pendientes</option>
                <option value="cancelled">Cancelados</option>
              </select>
              <input 
                type="date" 
                className="filter-date"
                defaultValue={new Date().toISOString().split('T')[0]}
              />
              <input
                type="search"
                placeholder="Buscar orden..."
                className="filter-search"
              />
            </div>
            <div className="orders-table">
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Producto</th>
                    <th>Cliente</th>
                    <th>Fecha</th>
                    <th>Estado</th>
                    <th>Monto</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.product}</td>
                      <td>{order.customer}</td>
                      <td>{order.date}</td>
                      <td>
                        <span className={`status ${order.status.toLowerCase()}`}>
                          {order.status}
                        </span>
                      </td>
                      <td>{order.amount}</td>
                      <td>
                        <div className="action-buttons">
                          <button className="icon-button edit">✏️</button>
                          <button className="icon-button delete">🗑️</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )

      case 'products':
        return (
          <div className="products-section">
            <div className="section-header">
              <h2>Gestión de Productos</h2>
              <div className="header-actions">
                <button className="action-button">Importar</button>
                <button className="action-button primary">Nuevo Producto</button>
              </div>
            </div>
            <div className="products-grid">
              {topProducts.map((product, index) => (
                <div key={index} className="product-card">
                  <div className="product-image">
                    <img src={`https://i.imgur.com/${index === 0 ? 'im9k8fm' : index === 1 ? 'ZTYh8Pd' : 'AjkdGus'}.jpg`} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-stats">
                      <span>Ventas: {product.sales}</span>
                      <span>Ingresos: {product.revenue}</span>
                    </div>
                    <div className="product-growth">
                      <span className="trend positive">↑ {product.growth}%</span>
                    </div>
                    <div className="product-actions">
                      <button className="action-button">Editar</button>
                      <button className="action-button danger">Eliminar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )

      case 'customers':
        return (
          <div className="customers-section">
            <div className="section-header">
              <h2>Gestión de Clientes</h2>
              <div className="header-actions">
                <button className="action-button">Exportar</button>
                <button className="action-button primary">Nuevo Cliente</button>
              </div>
            </div>
            <div className="customer-stats-grid">
              <div className="stat-card">
                <h3>Nuevos Clientes</h3>
                <p className="stat-value">{customerStats.new}</p>
                <span className="trend positive">↑ 12.5%</span>
              </div>
              <div className="stat-card">
                <h3>Clientes Recurrentes</h3>
                <p className="stat-value">{customerStats.returning}</p>
                <span className="trend positive">↑ 8.2%</span>
              </div>
              <div className="stat-card">
                <h3>Tasa de Abandono</h3>
                <p className="stat-value">{customerStats.churnRate}</p>
                <span className="trend negative">↓ 2.3%</span>
              </div>
              <div className="stat-card">
                <h3>Valor de Vida Promedio</h3>
                <p className="stat-value">{customerStats.avgLifetime}</p>
                <span className="trend positive">↑ 15.7%</span>
              </div>
            </div>
            <div className="customers-table">
              <table>
                <thead>
                  <tr>
                    <th>Cliente</th>
                    <th>Email</th>
                    <th>Ciudad</th>
                    <th>Órdenes</th>
                    <th>Valor Total</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr key={index}>
                      <td>{order.customer}</td>
                      <td>{order.customer.toLowerCase().replace(' ', '.')}@email.com</td>
                      <td>{customerStats.topLocations[index % 5].city}</td>
                      <td>{Math.floor(Math.random() * 10) + 1}</td>
                      <td>${(Math.random() * 1000 + 500).toFixed(2)}</td>
                      <td>
                        <span className="status completado">Activo</span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="icon-button edit">✏️</button>
                          <button className="icon-button delete">🗑️</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
    }
  }

  return (
    <main className="dashboard-container">
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>Dashboard</h2>
        </div>
        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Vista General
          </button>
          <button 
            className={`nav-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Órdenes
          </button>
          <button 
            className={`nav-item ${activeTab === 'products' ? 'active' : ''}`}
            onClick={() => setActiveTab('products')}
          >
            Productos
          </button>
          <button 
            className={`nav-item ${activeTab === 'customers' ? 'active' : ''}`}
            onClick={() => setActiveTab('customers')}
          >
            Clientes
          </button>
        </nav>
      </div>

      <div className="dashboard-content">
        <header className="content-header">
          <div>
            <h1>{
              activeTab === 'overview' ? 'Vista General' :
              activeTab === 'orders' ? 'Órdenes' :
              activeTab === 'products' ? 'Productos' :
              'Clientes'
            }</h1>
            <p className="text-gray-600">
              Última actualización: {new Date().toLocaleDateString('es-ES', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </header>

        {renderContent()}
      </div>
    </main>
  )
} 