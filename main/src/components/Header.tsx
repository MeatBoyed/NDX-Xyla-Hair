import Image from "next/image"
import Link from "next/link"
import { MenuSquareIcon } from "lucide-react"

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import BookingButton from "./ui/booking-button"
import { Button } from "./ui/button"

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
            className="hidden h-12 w-12 md:flex"
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
        <Drawer>
          <DrawerTrigger className="md:hidden">
            <MenuSquareIcon size={32} />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Rivonia Hair & Nail Care</DrawerTitle>
              <DrawerDescription>Find us on Social Media</DrawerDescription>
              <div className="flex flex-col gap-4 py-5">
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
                <BookingButton>
                  <Button className="w-full">Book now</Button>
                </BookingButton>
              </div>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  )
}
