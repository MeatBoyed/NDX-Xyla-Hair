import { env } from "@/env.mjs"

const FOLDER = "rivonia-hair-salon-nails"
export const ImageStore = {
  bannerBg: {
    alt: "Rivonia Hair Salon & Nail Care inside of the salon",
    key: "banner-background.webp",
    url: getImageUrl("banner-background.webp"),
  },
  ctaBg: {
    alt: "Woman throwing hair in Rivonia Hair Salon & Nail Care",
    key: "cta-background.webp",
    url: getImageUrl("cta-background.webp"),
  },
  gallery: [
    {
      alt: "Blue Hair Wig installation in Rivonia Hair Salon & Nail Care",
      src: "hair-blue-shirt.webp",
      url: getImageUrl("hair-blue-shirt.webp"),
    },
    {
      alt: "Red hair Wig installation Hair in Rivionia Hair Salon & Nail Care",
      src: "hair-red.webp",
      url: getImageUrl("hair-red.webp"),
    },
    {
      alt: "Child / Kid Braid installation in Rivonia Hair Salon & Nail Care",
      src: "kid-braids.webp",
      url: getImageUrl("kid-braids.webp"),
    },
    {
      alt: "Wig installation in Rivonia Hair Salon & Nail Care",
      src: "wig-locks.webp",
      url: getImageUrl("wig-locks.webp"),
    },
  ],
}

export function getImageUrl(objectKey: string) {
  return `${env.NEXT_PUBLIC_CLOUDFRONT_BASEURL}/${FOLDER}/${objectKey}`
}
