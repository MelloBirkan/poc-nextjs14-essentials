import Breadcrumbs from "@/app/components/Breadcrumbs";

export default function Sobre() {
  return (
    <div className="bg-slate-200 px-6 py-8 sm:py-10 lg:px-8 h-screen">
      <Breadcrumbs paginas={[
        { name: 'Sobre', href: '/sobre', current: true },
      ]}/>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base font-semibold leading-7 text-amber-600">Conheça nossa cafeteria</p>
        <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Sobre nós</h2>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Nossa cafeteria oferece uma experiência única com cafés especiais preparados com carinho e dedicação. Venha nos visitar e desfrute de um ambiente acolhedor.
        </p>
      </div>
    </div>
  )
}