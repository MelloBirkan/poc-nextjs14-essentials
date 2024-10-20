const stats = [
  { id: 1, name: 'Cafés vendidos diariamente', value: '500+' },
  { id: 2, name: 'Tipos de grãos especiais', value: '20+' },
  { id: 3, name: 'Satisfação dos clientes', value: '99.9%' },
  { id: 4, name: 'Cafés servidos desde a inauguração', value: '150,000+' },
]

export default function Example() {
  return (
    <div className="bg-amber-900 py-24 sm:py-32 h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Aprecie os melhores cafés da cidade</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nossa paixão é trazer o melhor café para você, preparado com carinho e qualidade.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-300">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}