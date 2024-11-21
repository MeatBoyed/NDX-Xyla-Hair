import { GoogleAnalytics } from "@next/third-parties/google"

import { env } from "@/env.mjs"
import { LandingPageComponent } from "@/components/landing-page"

export default function Home() {
  return (
    // <main className="flex h-screen items-center justify-center">
    <main className="min-h-screen w-full">
      {process.env.NODE_ENV === "production" && (
        <GoogleAnalytics gaId={env.GOOGLE_ANALYTICS_ID} />
      )}
      <LandingPageComponent />
    </main>
  )
}
