import Link from "next/link"

export default function FooterSection() {
  return (
    <footer className="bg-primary py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 md:flex-row">
        <p>&copy; 2024 Rivonia Hair & Nail Care. All rights reserved.</p>
        <div className="mt-4 flex space-x-4 md:mt-0">
          <Link href="#" className="hover:text-accent">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-accent">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}
