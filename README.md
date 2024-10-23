# Next.js 14 Coffee Shop - README

## Como Executar o Projeto

Este documento fornece um guia completo sobre como configurar e executar um projeto de uma cafeteria em Next.js, explicando em detalhes os conceitos do React e padrões de desenvolvimento utilizados. Vamos abordar os seguintes tópicos:

1. Estrutura de Projeto Next.js 14
2. Criação de componentes (simples e compostos)
3. Estilização com Tailwind CSS no React
4. Roteamento e navegação
5. Gerenciamento de estado e props
6. Padrões de design e boas práticas
7. Componentes reutilizáveis
8. Responsividade e design mobile-first

### Requisitos

- Node.js versão 14 ou superior
- npm ou yarn
- Next.js versão 14 ou superior
- Tailwind CSS
- Hero Icons (para ícones)
- React 18+

### Configuração Inicial

1. **Clone o repositório**:

   ```bash
   git clone <link-do-repositorio>
   cd coffee-shop-next
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure o Tailwind CSS**:

   ```bash
   npx tailwindcss init -p
   ```

4. **Execute o servidor de desenvolvimento**:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

   O projeto estará disponível em `http://localhost:3000`.

## Componentes do Projeto

### 1. Sistema de Navegação

#### Breadcrumbs Component
O componente Breadcrumbs oferece navegação hierárquica intuitiva:

![breadcrumb](images/breadcrumbs.png)

```jsx
import { HomeIcon } from '@heroicons/react/20/solid'
import Link from "next/link";

export default function Breadcrumbs({paginas}) {
  return (
    <nav aria-label="Breadcrumb" className="flex p-5">
      <ol role="list" className="flex space-x-4 rounded-md bg-white px-6 shadow">
        <li className="flex">
          <div className="flex items-center">
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
            </Link>
          </div>
        </li>
        {paginas.map((page) => (
          <li key={page.name} className="flex">
            <div className="flex items-center">
              <svg
                fill="currentColor"
                viewBox="0 0 24 44"
                preserveAspectRatio="none"
                className="h-full w-6 flex-shrink-0 text-gray-200"
              >
                <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
              </svg>
              <Link
                href={page.href}
                aria-current={page.current ? 'page' : undefined}
                className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
```

#### Links Personalizados
Component para links estilizados consistentemente:

![Nossos Cafés](images/produtos.png)

```jsx
const LinkPersonalizado = ({children, href}) => {
  return (
    <Link href={href}
          className="whitespace-nowrap font-semibold text-amber-600">
      {children} <span>&rarr;</span>
    </Link>
  )
}
```

### 2. Sistema de Produtos

#### Catálogo de Produtos
Estrutura de dados para produtos:

```jsx
const products = [
  {
    id: 1,
    name: 'Cappuccino Tradicional',
    price: 'R$12,00',
    href: '#',
    imageSrc: '...',
    imageAlt: 'Cappuccino com espuma cremosa e canela.',
  },
  // ... outros produtos
]
```

#### Product Card Component
Card individual para exibição de produto:

![Nossos Cafés](images/card.png)

```jsx
function ProductCard(props) {
  return (
    <div className="group relative">
      <div className="h-96 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
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
    </div>
  )
}
```

#### Products List Component
Lista de produtos com grid responsivo:

![Nossos Cafés](images/cards.png)

```jsx
function ProductsList(props) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-8 lg:px-8">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Nossos Favoritos
        </h2>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
        {products.map(props.callbackfn)}
      </div>
    </div>
  )
}
```

### 3. Componentes de Interface

#### Call-to-Action Buttons
Botões estilizados para ações principais:

![Nossos Cafés](images/stats.png)

```jsx
function CtaButton() {
  return (
    <div className="mt-10 flex items-center gap-x-6">
      <Link
        href="produtos"
        className="rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
      >
        Peça agora
      </Link>
      <LinkPersonalizado href={"/nossosCafes"}>
        Nossos Cafés
      </LinkPersonalizado>
    </div>
  )
}
```

#### Info Panel Component
Painéis de estatísticas e informações:

```jsx
function InfoPanel(props) {
  return (
    <div className="flex flex-col bg-white/5 p-8">
      <dt className="text-sm font-semibold leading-6 text-gray-300">
        {props.stat.name}
      </dt>
      <dd className="order-first text-3xl font-semibold tracking-tight text-white">
        {props.stat.value}
      </dd>
    </div>
  )
}
```

## Páginas Principais

### 1. Página Inicial (Home)
A página inicial combina diversos componentes para criar uma experiência atraente:

```jsx
export default function Page() {
  return (
    <div className="relative bg-slate-200 h-screen">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="px-6 pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <img
              alt="Coffee Co."
              src="..."
              className="size-20 rounded-2xl"
            />
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Desfrute de uma experiência única em nossa cafeteria.
                <LinkPersonalizado href={"/sobre"}>Sobre</LinkPersonalizado>
              </div>
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              Coffee Co.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Saboreie nossos cafés especiais e sinta o aroma que encanta.
            </p>
            <CtaButton/>
          </div>
        </div>
        <VerticalImage/>
      </div>
    </div>
  )
}
```

### 2. Página de Produtos
A página de produtos utiliza o sistema de grid para exibir os produtos:

```jsx
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
```

## Padrões de Design e Boas Práticas

### 1. Componentização
- Componentes pequenos e reutilizáveis
- Separação clara de responsabilidades
- Props bem definidas e documentadas

### 2. Tailwind CSS
Utilizamos classes utilitárias do Tailwind para:
- Responsividade (`sm:`, `md:`, `lg:`, `xl:`)
- Hover states (`hover:`)
- Focus states (`focus:`, `focus-visible:`)
- Flexbox e Grid (`flex`, `grid`)
- Espaçamento e padding (`p-`, `m-`, `gap-`)

### 3. Mobile-First Design
```jsx
// Exemplo de classes responsivas
className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
```

### 4. Acessibilidade
- Uso de tags semânticas (`nav`, `main`, `section`)
- ARIA labels
- Contrast ratios adequados
- Focus management

## Gerenciamento de Estado

### 1. Props Drilling
Exemplo de como passamos dados através de componentes:

```jsx
// Página principal passando dados para ProductsList
<ProductsList 
  products={products}
  onProductClick={handleProductClick}
  layout="grid"
/>

// ProductsList passando para ProductCard
{products.map(product => (
  <ProductCard
    key={product.id}
    product={product}
    onClick={onProductClick}
  />
))}
```

### 2. Composição de Componentes
Exemplo de como componentes podem ser compostos:

```jsx
function Page() {
  return (
    <Layout>
      <Header>
        <Breadcrumbs paginas={[...]} />
      </Header>
      <Main>
        <ProductsList>
          <ProductCard />
        </ProductsList>
      </Main>
      <Footer />
    </Layout>
  )
}
```

## Conclusão

Este README fornece uma visão abrangente do projeto Coffee Shop em Next.js, demonstrando como diferentes componentes e técnicas trabalham juntos para criar uma aplicação web moderna e eficiente. O projeto serve como um excelente exemplo de:

- Arquitetura de componentes React
- Estilização com Tailwind CSS
- Padrões de design responsivo
- Boas práticas de desenvolvimento
- Acessibilidade web

Para mais informações sobre como expandir o projeto ou adicionar novas funcionalidades, consulte:
- [Documentação oficial do Next.js](https://nextjs.org/docs)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)

### Próximos Passos

1. Implementar autenticação de usuários
2. Adicionar um carrinho de compras
3. Integrar com um sistema de pagamentos
4. Implementar um painel administrativo
5. Adicionar mais animações e transições
6. Implementar testes automatizados

Para contribuir com o projeto, por favor leia nosso guia de contribuição e siga as diretrizes de código estabelecidas.