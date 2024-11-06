import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

import { env } from "@/env.mjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactSection() {
  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-primary">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h3 className="text mb-4 text-xl font-semibold">Get in Touch</h3>
            <form className="space-y-4">
              <Input
                placeholder="Your Name"
                className="border-secondary bg-white"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="border-secondary bg-white"
              />
              <Textarea
                placeholder="Your Message"
                className="border-secondary bg-white"
              />
              <Button type="submit" className="">
                Send Message
              </Button>
            </form>
          </div>
          <div>
            <h3 className="text mb-4 text-xl font-semibold">Visit Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <MapPin className="text h-6 w-6" />
                <Link
                  href={env.NEXT_PUBLIC_MAPS_LINK}
                  className="text-gray-600"
                >
                  123 Rivonia Road, Sandton, Johannesburg
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text h-6 w-6" />
                <Link
                  href={`tel:${env.NEXT_PUBLIC_PHONE_NUMBER}`}
                  className="text-gray-600"
                >
                  {env.NEXT_PUBLIC_PHONE_NUMBER}
                </Link>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text h-6 w-6" />
                <Link
                  href={`mailto:${env.NEXT_PUBLIC_EMAIL}`}
                  className="text-gray-600"
                >
                  {env.NEXT_PUBLIC_EMAIL}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
