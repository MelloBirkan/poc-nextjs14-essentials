import Link from "next/link";

export const LinkPersonalizado = ({children, href}) => {
  return (
        <Link href={href}
              className="whitespace-nowrap font-semibold text-amber-600">
          {children} <span>&rarr;</span>
        </Link>
  )
}