import { MetadataRoute } from "next"

import { env } from "@/env.mjs"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: ["/search?q=", "/admin/"],
    },
    sitemap: [`${env.NEXT_PUBLIC_APP_URL}/sitemap.xml`],
  }
}
