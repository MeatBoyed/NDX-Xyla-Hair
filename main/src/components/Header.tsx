import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200 bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg?height=48&width=48"
            alt="Rivonia Hair & Nail Care"
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <span className="text-xl font-bold text-primary">
            Rivonia Hair & Nail Care
          </span>
        </Link>
        <nav className="hidden items-center space-x-8 md:flex">
          <Link
            href="#services"
            className="text-base font-medium text-gray-700 hover:text-primary"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-base font-medium text-gray-700 hover:text-primary"
          >
            About Us
          </Link>
          <Link
            href="#portfolio"
            className="text-base font-medium text-gray-700 hover:text-primary"
          >
            Portfolio
          </Link>
          <Link
            href="#testimonials"
            className="text-base font-medium text-gray-700 hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            href="#contact"
            className="text-base font-medium text-gray-700 hover:text-primary"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}