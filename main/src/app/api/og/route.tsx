import Link from "next/link"
import { ImageResponse } from "next/og"

import { Button, buttonVariants } from "@/components/ui/button"

// App router includes @vercel/og.
// No need to install it.

export async function GET() {
  return new ImageResponse(
    (
      <section className="h-[350px]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
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
          <p className="mb-8 max-w-4xl  text-xl text-white/90">
            Book your appointment today and experience expert hair and nail care
            at Rivonia&apos;s trusted salon. Click below to schedule your visit
            or walk in to enjoy our exceptional services!
          </p>
          {/* <Link
            href="/contact"
            className={buttonVariants({
              size: "lg",
              className: "bg-white text-accent-foreground hover:bg-gray-100",
            })}
          >
            Book Your Appointment
          </Link> */}
        </div>
      </section>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
