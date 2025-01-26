'use client'
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table'

const columnHelper = createColumnHelper<any>()

const columns = [
  columnHelper.accessor('producto', {
    header: 'Producto',
    cell: info => (
      <div className="product-cell">
        <img src={info.row.original.imagen} alt={info.getValue()} className="product-thumb" />
        <span>{info.getValue()}</span>
      </div>
    ),
  }),
  columnHelper.accessor('ventas', {
    header: 'Ventas',
    cell: info => <span className="font-semibold">{info.getValue()}</span>,
  }),
  columnHelper.accessor('ingresos', {
    header: 'Ingresos',
    cell: info => <span className="text-primary">${info.getValue()}</span>,
  }),
  columnHelper.accessor('crecimiento', {
    header: 'Crecimiento',
    cell: info => (
      <span className={`trend ${Number(info.getValue()) > 0 ? 'positive' : 'negative'}`}>
        {Number(info.getValue()) > 0 ? '↑' : '↓'} {Math.abs(info.getValue())}%
      </span>
    ),
  }),
  columnHelper.accessor('conversion', {
    header: 'Conversión',
    cell: info => <span>{info.getValue()}%</span>,
  }),
]

const data = [
  {
    producto: 'SmartWatch Pro X',
    imagen: 'https://i.imgur.com/im9k8fm.jpg',
    ventas: '2,345',
    ingresos: '210,982',
    crecimiento: 45,
    conversion: 3.2,
  },
  {
    producto: 'Auriculares ANC Elite',
    imagen: 'https://i.imgur.com/ZTYh8Pd.jpg',
    ventas: '1,892',
    ingresos: '245,851',
    crecimiento: 32,
    conversion: 2.8,
  },
  {
    producto: 'Drone 4K Ultra',
    imagen: 'https://i.imgur.com/AjkdGus.jpg',
    ventas: '982',
    ingresos: '294,590',
    crecimiento: -12,
    conversion: 1.9,
  },
  {
    producto: 'Cámara Pro 360',
    imagen: 'https://i.imgur.com/ZTYh8Pd.jpg',
    ventas: '1,544',
    ingresos: '185,280',
    crecimiento: 28,
    conversion: 2.5,
  },
]

export default function AnalyticsPage() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <main className="page-container">
      <section className="page-header">
        <h1>Analytics <span className="text-gradient">Avanzado</span></h1>
        <p className="subtitle">Analiza el rendimiento de productos y tiendas en tiempo real</p>
      </section>

      <div className="analytics-grid">
        <div className="analytics-card wide">
          <h3>Ventas Totales</h3>
          <div className="chart-container">
            <div className="analytics-table">
              <table>
                <thead>
                  {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                      {headerGroup.headers.map(header => (
                        <th key={header.id}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody>
                  {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                      {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {metrics.map((metric) => (
          <div key={metric.id} className="analytics-card">
            <h3>{metric.title}</h3>
            <div className="metric-value">{metric.value}</div>
            <div className={`metric-trend ${metric.trend >= 0 ? 'positive' : 'negative'}`}>
              {metric.trend >= 0 ? '↑' : '↓'} {Math.abs(metric.trend)}%
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

const metrics = [
  {
    id: 1,
    title: "Conversión",
    value: "3.2%",
    trend: 0.8
  },
  {
    id: 2,
    title: "Ticket Promedio",
    value: "$127.50",
    trend: 12.5
  },
  {
    id: 3,
    title: "Productos Activos",
    value: "1,234",
    trend: 23.4
  }
] 