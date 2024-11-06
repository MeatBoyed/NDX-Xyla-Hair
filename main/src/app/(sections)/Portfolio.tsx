"use client"

import { useState } from "react"
import Image from "next/image"

import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function PortfolioSection() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState("")

  const portfolioItems = [
    // { src: "/placeholder.svg?height=300&width=300", alt: "Elegant Updo" },
    { src: "/hair-blue-shirt.jpg", alt: "hair blue shirt" },
    { src: "/hair-red.jpg", alt: "Natural Curls" },
    { src: "/kid-braids.jpg", alt: "Sleek Bob Cut" },
    { src: "/wig-locks.jpg", alt: "Intricate Nail Art" },
    // { src: "/placeholder.svg?height=300&width=300", alt: "Classic Manicure" },
  ]

  return (
    <>
      {/* Portfolio Section */}
      <section id="portfolio" className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-3xl font-bold text-primary">
            Our Best Works
          </h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {portfolioItems.map((item, index) => (
              <div key={index} className="relative aspect-square bg-gray-100">
                <Image
                  src={item.src}
                  alt={item.alt}
                  layout="fill"
                  objectFit="cover"
                  className="cursor-pointer rounded-lg transition-transform hover:scale-105"
                  onClick={() => {
                    setCurrentImage(item.src)
                    setLightboxOpen(true)
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-3xl">
          <div className="relative aspect-square">
            <Image
              src={currentImage}
              alt="Portfolio item"
              layout="fill"
              objectFit="contain"
            />
          </div>
          {/* <Button
            className="absolute right-2 top-2"
            variant="ghost"
            size="icon"
            onClick={() => setLightboxOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button> */}
        </DialogContent>
      </Dialog>
    </>
  )
}
