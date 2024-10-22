import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Coffee Co.",
  description: "A melhor cafeteria da cidade, oferecendo uma experiência única com cafés especiais e um ambiente acolhedor.",
};

function Banner() {
  return (
    <div className="flex items-center gap-x-6 bg-amber-600 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
      <div className="text-sm leading-6 text-white">
        <p>
          <strong className="font-semibold">CoffeeCon 2025</strong>
          <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current">
            <circle r={1} cx={1} cy={1} />
          </svg>
          Participe do nosso evento para amantes de café em 21/01/2025. Não perca!
        </p>
      </div>
      <div className="flex flex-1 justify-end">
      </div>
    </div>
  )
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Banner />
        {children}
      </body>
    </html>
  );
}
