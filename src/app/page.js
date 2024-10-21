import Link from 'next/link';

function CtaButton() {
  return <div className="mt-10 flex items-center gap-x-6">
    <Link
      href="produtos"
      className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
    >
      Peça agora
    </Link>
    <LinkPersonalizado href={"/nossosCafes"}>Nossos Cafés</LinkPersonalizado>
  </div>;
}

const LinkPersonalizado = ({children, href}) => {
  return (
    <Link href={href}
          className="whitespace-nowrap font-semibold text-amber-600">
      {children} <span>&rarr;</span>
    </Link>
  )
}

function VerticalImage() {
  return <div
    className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
    <img
      alt="Cafe"
      src="https://cdn.midjourney.com/01522bc3-f91b-4883-8644-6ca3fa2128f6/0_0.png"
      className="aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-screen"
    />
  </div>;
}

export default function Page() {
  return (
    <div className="relative bg-slate-200 h-screen">
      <div
        className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div
          className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <img
              alt="Coffee Co."
              src="https://cdn.midjourney.com/ebaf3f94-7000-4779-86cf-f27172726711/0_0.png"
              className="size-20 rounded-2xl"
            />
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div
                className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Desfrute de uma experiência única em nossa cafeteria.{' '}
                <LinkPersonalizado href={"/sobre"}>Sobre</LinkPersonalizado>
              </div>
            </div>
            <h1
              className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Coffee Co.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Saboreie nossos cafés especiais e sinta o aroma que encanta. Cada
              xícara é preparada com carinho e dedicação.
            </p>
            <CtaButton/>
          </div>
        </div>
        <VerticalImage/>
      </div>
    </div>
  )
}
