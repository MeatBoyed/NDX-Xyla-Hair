import { Metadata } from "next"
import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Rivonia Hair Salon & Nail Care – Expert Styling for All",
  author: "Nerf Designs - Charles Rossouw",
  description:
    "Discover professional hair and nail care services at Rivonia’s trusted salon. Specializing in black hair, dreadlocks, braids, wigs, and nails for men, women, and kids. Book online today!",
  keywords: [
    "Hair Salon",
    "Hair Salon Rivonia",
    "Hair Salon near me",
    "Hair Salon for black hair",
    "Hair Salon for men",
    "Hair Salon for kids",
    "Hair Salon for dreadlocks",
    "Hair Salon for braids",
    "Nail Care Rivonia",
    "Nail Salon near me",
    "Hair and Nail Salon Rivonia",
    "Rivonia Hair Stylists",
    "Online Hair Salon Booking Rivonia",
    "Affordable Hair Salon Rivonia",
    "Nerf Designs",
    "Next.js",
    "React",
    "Tailwind CSS",
    "Radix UI",
    "shadcn/ui",
  ],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://www.nerfdesigns.com/",
  },
  links: {
    github: "https://github.com/redpangilinan/next-entree",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}

export const SiteMetaData: Metadata = {
  metadataBase: new URL("https://dminhvu.com"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [
    {
      name: siteConfig.author,
      url: siteConfig.url.author,
    },
  ],
  creator: siteConfig.author,
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@nerfdesigns",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  alternates: {
    types: {
      "application/rss+xml": "https://dminhvu.com/rss.xml",
    },
  },
  applicationName: siteConfig.name,
  appleWebApp: {
    title: siteConfig.name,
    statusBarStyle: "default",
    capable: true,
  },
  // verification: {
  //   google: "YOUR_DATA",
  //   yandex: ["YOUR_DATA"],
  //   other: {
  //     "msvalidate.01": ["YOUR_DATA"],
  //     "facebook-domain-verification": ["YOUR_DATA"],
  //   },
  // },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      // add favicon-32x32.png, favicon-96x96.png, android-chrome-192x192.png
    ],
    shortcut: [
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: [
      {
        url: "/apple-icon-57x57.png",
        sizes: "57x57",
        type: "image/png",
      },
      {
        url: "/apple-icon-60x60.png",
        sizes: "60x60",
        type: "image/png",
      },
      // add apple-icon-72x72.png, apple-icon-76x76.png, apple-icon-114x114.png, apple-icon-120x120.png, apple-icon-144x144.png, apple-icon-152x152.png, apple-icon-180x180.png
    ],
  },
}

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rivonia Hair Salon & Nail Care",
  description:
    "Discover expert hair styling, dreadlocks, wig treatments, and nail care services tailored for all at Rivonia Hair Salon & Nail Care.",
  url: env.NEXT_PUBLIC_APP_URL, // Replace with the real website URL
  image: "https://rivoniahairsalon.com/assets/og-image.png", // Replace with the real OG image URL
  telephone: env.NEXT_PUBLIC_PHONE_NUMBER, // Replace with the salon's contact number
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rivonia Central Shopping Centre, Rivonia Blvd",
    addressLocality: "Johannesburg",
    addressRegion: "Gauteng",
    postalCode: "2128",
    addressCountry: "ZA",
  },
  openingHours: "Mo-Sa 09:00-18:00, Su 10:00-15:00", // Adjust as per actual hours
  geo: {
    "@type": "GeoCoordinates",
    latitude: -26.054711, // Replace with actual coordinates
    longitude: 28.059805,
  },
  sameAs: [
    "https://www.facebook.com/RivoniaHairSalon", // Replace with actual links
    "https://www.instagram.com/RivoniaHairSalon",
  ],
  priceRange: "$$", // Adjust based on pricing
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": env.NEXT_PUBLIC_APP_URL, // Replace with the main page URL
  },
  headline: "Expert Hair and Nail Care in Rivonia | Rivonia Hair Salon",
  dateCreated: "2024-11-21T08:00:00+02:00",
  datePublished: "2024-11-21T08:00:00+02:00",
  dateModified: new Date().toJSON(),
  author: {
    "@type": "Organization",
    name: "Rivonia Hair Salon & Nail Care",
  },
  publisher: {
    "@type": "Organization",
    name: "Rivonia Hair Salon & Nail Care",
    logo: {
      "@type": "ImageObject",
      url: `${env.NEXT_PUBLIC_APP_URL}/assets/logo.png`, // Replace with the logo URL
    },
  },
  inLanguage: "en-ZA",
  isFamilyFriendly: "true",
}

export const PriceList = [
  { name: "Hair Care", duration: "", price: "" },
  { name: "Wash", duration: "15MIN", price: "R100" },
  { name: "Undo", duration: "30MIN", price: "R50-R200" },
  { name: "Relaxers", duration: "45MIN", price: "R150-R250" },

  { name: "Cornrows & Braiding", duration: "", price: "" },
  {
    name: "Tribal Cornrows (Shoulder Length)",
    duration: "1HR 30MIN",
    price: "R500",
  },
  { name: "Tribal Cornrows (Bra Length)", duration: "2HR", price: "R550" },
  {
    name: "Tribal Cornrows (Wrist Length)",
    duration: "2HR 30MIN",
    price: "R650",
  },
  { name: "Tribal Cornrows (Bum Length)", duration: "3HR", price: "R700" },
  { name: "Thin Cornrows", duration: "3HR", price: "R750-R850" },
  { name: "Extra Length (Cornrows)", duration: "30MIN", price: "R100" },
  { name: "Beads", duration: "30MIN", price: "R100-R200" },
  { name: "Butterfly Braids (Short)", duration: "2HR 30MIN", price: "R900" },
  { name: "Butterfly Braids (Long)", duration: "3HR 30MIN", price: "R1200" },
  { name: "Box Braids (Normal Size)", duration: "3HR", price: "R650-R950" },
  {
    name: "Knotless Braids (Normal Size)",
    duration: "3HR",
    price: "R650-R950",
  },
  { name: "Locks Braids (All Sizes)", duration: "4HR", price: "R950-R1600" },

  { name: "Styling & Dreadlocks", duration: "", price: "" },
  { name: "Gel Pondo (Short)", duration: "1HR", price: "R400" },
  { name: "Gel Pondo (Medium)", duration: "1HR 30MIN", price: "R550" },
  { name: "Gel Pondo (Long)", duration: "2HR", price: "R650" },
  {
    name: "Dreadlock Twisting & Styling",
    duration: "1HR 30MIN",
    price: "R550",
  },
  { name: "Crotchet Dreadlocks", duration: "2HR", price: "R650" },
  { name: "Weaves and Wig Installations", duration: "1HR", price: "R450" },

  { name: "Nails & Beauty", duration: "", price: "" },
  { name: "Glish", duration: "30MIN", price: "R250" },
  { name: "Pedicure", duration: "45MIN", price: "R300" },
  { name: "Manicure", duration: "45MIN", price: "R280" },
  { name: "Nail Art", duration: "1HR", price: "R450" },
]
