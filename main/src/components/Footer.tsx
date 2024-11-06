import Link from "next/link"

import BrandingFooter from "./ndx/branding-footer"

export default function FooterSection() {
  return (
    <footer className="space-y-16 bg-primary py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between px-6 md:flex-row">
        <p>Rivonia Hair & Nail Care</p>
        <div className="mt-4 flex space-x-4 md:mt-0">
          <Link href="#" className="hover:text-accent">
            Privacy Policy
          </Link>
          <Link href="#" className="hover:text-accent">
            Terms of Service
          </Link>
        </div>
      </div>
      <BrandingFooter />
    </footer>
  )
}
