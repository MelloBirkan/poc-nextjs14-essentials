import Breadcrumbs from "@/app/components/Breadcrumbs";

const products = [
  {
    id: 1,
    name: 'Cappuccino Tradicional',
    price: 'R$12,00',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/7eb3a474-ed30-4cc7-9a04-18872667b84d/0_1.png',
    imageAlt: 'Cappuccino com espuma cremosa e canela.',
  },
  {
    id: 2,
    name: 'Frappuccino de Chocolate',
    price: 'R$18,00',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/109fd618-3f6a-4696-9b00-31378ac299aa/0_0.png',
    imageAlt: 'Frappuccino de chocolate decorado com chantilly.',
  },
  {
    id: 3,
    name: 'Sorvete Artesanal de Baunilha',
    price: 'R$10,00',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/da6c8d59-1c5f-4e8f-a334-7cb26c304740/0_0.png',
    imageAlt: 'Sorvete de baunilha servido em uma taça.',
  },
  {
    id: 4,
    name: 'Chá Gelado de Limão',
    price: 'R$9,00',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/108d1756-6b51-4c0a-b6e1-5ccb527fa990/0_2.png',
    imageAlt: 'Chá gelado de limão com gelo e fatias de limão.',
  },
  {
    id: 5,
    name: 'Pão de Queijo',
    price: 'R$6,00',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/5dd1ac3c-9a52-4824-a2b9-bf4c4682a169/0_0.png',
    imageAlt: 'Pão de queijo dourado em uma cesta.',
  },
  {
    id: 6,
    name: 'Milkshake de Morango',
    price: 'R$16,00',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/c7120a90-52a1-41d9-bd3b-1b4e3581125a/0_1.png',
    imageAlt: 'Milkshake de morango com chantilly.',
  },
  {
    id: 7,
    name: 'Croissant de Chocolate',
    price: 'R$8,00',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/f83d706d-8b82-435b-9db5-aa90732db718/0_2.png',
    imageAlt: 'Croissant recheado com chocolate derretido.',
  },
  {
    id: 8,
    name: 'Café Gelado com Caramelo',
    price: 'R$14,00',
    href: '#',
    imageSrc: 'https://cdn.midjourney.com/b7571d62-b38b-4a7f-b3d9-195b1bd23970/0_2.png',
    imageAlt: 'Café gelado com caramelo e cubos de gelo.',
  },
]

function ProductCard(props) {
  return <div className="group relative">
    <div
      className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
      <img
        alt={props.product.imageAlt}
        src={props.product.imageSrc}
        className="h-full w-full object-cover object-center"
      />
    </div>
    <h3 className="mt-4 text-base font-semibold text-gray-900">
      <p>
        <span className="absolute inset-0"/>
        {props.product.name}
      </p>
    </h3>
    <p className="mt-1 text-sm text-gray-500 pb-5">{props.product.price}</p>
  </div>;
}

function ProductsList(props) {
  return <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-8 lg:px-8">
    <div className="sm:flex sm:items-baseline sm:justify-between">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nossos
        Favoritos</h2>
    </div>
    <div
      className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
      {products.map(props.callbackfn)}
    </div>
  </div>;
}

export default function Page() {
  return (
    <div className="bg-slate-200 h-max">
      <Breadcrumbs paginas={[
        {name: 'Produtos', href: '/produtos', current: true},
      ]}/>
      <ProductsList callbackfn={(product) => (
        <ProductCard key={product.id} product={product}/>
      )}/>
    </div>
  )
}

