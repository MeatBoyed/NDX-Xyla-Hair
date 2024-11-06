import Link from "next/link"
import {
  Award,
  Calendar,
  Clock,
  Palette,
  Scissors,
  Smile,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactSection from "@/app/(sections)/Contact"
import PortfolioSection from "@/app/(sections)/Portfolio"

import FooterSection from "./Footer"
import Header from "./Header"

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
            backgroundImage:
              "url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
            Rivonia Hair & Nail Care
          </h1>
          <p className="mb-12 max-w-3xl text-xl text-white/90 md:text-2xl">
            Located in the heart of Rivonia, Johannesburg, we specialize in
            black hair care—offering professional dreadlocks, braids, wig
            installs, and nail treatments for both men and women.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" className="">
              Book your Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-white/10 text-white hover:bg-gray-100"
            >
              Our Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-secondary bg-white">
              <CardContent className="flex flex-col items-center p-6">
                <Scissors className="text mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold text-primary">
                  Hair Styling
                </h3>
                <p className="text-center text-gray-600">
                  Professional hair styling services including cuts, coloring,
                  and treatments.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary bg-white">
              <CardContent className="flex flex-col items-center p-6">
                <Palette className="text mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold text-primary">
                  Nail Care
                </h3>
                <p className="text-center text-gray-600">
                  Manicures, pedicures, and nail art services for both men and
                  women.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary bg-white">
              <CardContent className="flex flex-col items-center p-6">
                <Clock className="text mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold text-primary">
                  Quick Services
                </h3>
                <p className="text-center text-gray-600">
                  Express treatments for those on a tight schedule.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="bg-gray-100 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="border-secondary bg-white">
              <CardContent className="flex flex-col items-center p-6">
                <Award className="text mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold text-primary">
                  Expert Stylists
                </h3>
                <p className="text-center text-gray-600">
                  Our team of skilled professionals has years of experience in
                  hair and nail care, staying up-to-date with the latest trends
                  and techniques.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary bg-white">
              <CardContent className="flex flex-col items-center p-6">
                <Users className="text mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold text-primary">
                  Personalized Service
                </h3>
                <p className="text-center text-gray-600">
                  We take the time to understand your unique needs and
                  preferences, ensuring a tailored experience that exceeds your
                  expectations.
                </p>
              </CardContent>
            </Card>
            <Card className="border-secondary bg-white">
              <CardContent className="flex flex-col items-center p-6">
                <Smile className="text mb-4 h-12 w-12" />
                <h3 className="mb-2 text-xl font-semibold text-primary">
                  Welcoming Atmosphere
                </h3>
                <p className="text-center text-gray-600">
                  Our friendly staff and comfortable salon create a warm,
                  inviting environment where you can relax and enjoy your beauty
                  treatment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <PortfolioSection />

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
                  "The team at Rivonia Hair & Nail Care are true professionals.
                  My hair has never looked better!"
                </p>
                <p className="font-semibold text-primary">- Sarah M.</p>
              </CardContent>
            </Card>
            <Card className="border-secondary bg-white">
              <CardContent className="p-6">
                <p className="mb-4 italic text-gray-600">
                  "I love coming here for my regular manicures. The staff is
                  friendly and the results are always perfect."
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
            backgroundImage:
              "url('https://images.unsplash.com/flagged/photo-1580820258381-20c91a156841?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative mx-auto  flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">
            Ready to Transform Your Look?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Book your appointment now and experience the Rivonia difference!
          </p>
          <Button
            size="lg"
            className="bg-white text-accent-foreground hover:bg-gray-100"
          >
            Book Your Appointment
          </Button>
        </div>
      </section>

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <FooterSection />

      {/* Hovering Booking Button */}
      <div className="fixed bottom-4 left-4 z-50">
        <Button
          size="lg"
          className="flex items-center space-x-2 rounded-full shadow-lg"
          aria-label="Book an appointment"
        >
          <Calendar className="h-5 w-5" />
          <span className="hidden sm:inline">Book online</span>
        </Button>
      </div>
    </div>
  )
}
