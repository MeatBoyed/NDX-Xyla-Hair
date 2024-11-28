import Link from "next/link"
import {
  Award,
  Calendar,
  Clock,
  icons,
  Palette,
  Scissors,
  Smile,
  Users,
  Weight,
} from "lucide-react"

import { ImageStore } from "@/lib/ImageStore"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactSection from "@/app/(sections)/Contact"
import PortfolioSection from "@/app/(sections)/Portfolio"
import PricingTable from "@/app/(sections)/PricingTable"
import ServiceCard from "@/app/(sections)/ServiceCard"
import ServiceSection from "@/app/(sections)/Services"

import FooterSection from "./Footer"
import Header from "./Header"
import BookingButton from "./ui/booking-button"

export function LandingPageComponent() {
  return (
    <div className="relative flex min-h-screen flex-col bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
            backgroundImage: `url(${ImageStore.bannerBg.url})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Rivonia Hair Salon & Nail Care
          </h1>
          <p className="mb-12 max-w-3xl text-xl text-white/90 md:text-2xl">
            Located in the heart of Rivonia, Johannesburg, we specialize in
            black hair care—offering professional dreadlocks, braids, wig
            installs, and nail treatments for both men and women.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <BookingButton>
              <Button size="lg" className="">
                Book your Appointment
              </Button>
            </BookingButton>
            <Link
              href="#services"
              className={buttonVariants({
                variant: "outline",
                className:
                  "border-white bg-white/10 text-white hover:bg-gray-100",
              })}
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Our Services
          </h2>

          <ServiceSection />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <ServiceCard
              props={{
                icon: Scissors,
                title: "Expert Stylists",
                description:
                  "Our skilled stylists specialize in hair and nail care for all types, including black hair, dreadlocks, and braids. With years of experience, we stay ahead of the latest trends to deliver top-notch results tailored to your unique style.",
              }}
            />
            <ServiceCard
              props={{
                icon: Scissors,
                title: "Online Bookings",
                description:
                  "Book your next hair or nail appointment with ease! Our convenient online booking system, powered by Calendly, lets you schedule treatments at a time that suits you, ensuring a seamless salon experience.",
              }}
            />
            <ServiceCard
              props={{
                icon: Scissors,
                title: "Welcoming Atmosphere",
                description:
                  "Step into our Rivonia salon and feel at home. Our friendly staff creates a warm, relaxing environment where you can enjoy professional hair and nail treatments tailored for men, women, and kids.",
              }}
            />
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <PortfolioSection />

      {/* Why Choose Us Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Pricing
          </h2>

          <PricingTable />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="bg-gray-100/50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <Card className="border-secondary bg-white">
              <CardContent className="p-6">
                <p className="mb-4 italic text-gray-600">
                  &quot;The team at Rivonia Hair & Nail Care are true
                  professionals. My hair has never looked better!&quot;
                </p>
                <p className="font-semibold text-primary">- Sarah M.</p>
              </CardContent>
            </Card>
            <Card className="border-secondary bg-white">
              <CardContent className="p-6">
                <p className="mb-4 italic text-gray-600">
                  &quot;I love coming here for my regular manicures. The staff
                  is friendly and the results are always perfect.&quot;
                </p>
                <p className="font-semibold text-primary">- John D.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section for Booking */}
      <section className="relative h-[350px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            // backgroundImage: "url('/placeholder.svg?height=600&width=1200')",
            backgroundImage: `url(${ImageStore.ctaBg.url})`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto  flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Transform Your Look?
          </h2>
          <p className="mb-8 max-w-4xl  text-xl text-white/90">
            Book your appointment today and experience expert hair and nail care
            at Rivonia&apos;s trusted salon. Click below to schedule your visit
            or walk in to enjoy our exceptional services!
          </p>
          <BookingButton>
            <Button
              size="lg"
              className="bg-white text-accent-foreground hover:bg-gray-100"
            >
              Book Your Appointment
            </Button>
          </BookingButton>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />

      {/* Hovering Booking Button */}
      <div className="fixed bottom-4 right-4 z-50">
        <BookingButton>
          <Button
            size="lg"
            className="flex items-center space-x-2 rounded-full shadow-lg"
            aria-label="Book an appointment"
          >
            <Calendar className="h-5 w-5" />
            <span className="hidden sm:inline">Book online</span>
          </Button>
        </BookingButton>
      </div>
    </div>
  )
}
