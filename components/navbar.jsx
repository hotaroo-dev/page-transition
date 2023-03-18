import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="z-10 fixed top-0 font-medium py-4 px-8 text-2xl lg:px-16">
      <ul className="flex gap-12">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  )
}
