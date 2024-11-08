import { createEnv } from "@t3-oss/env-nextjs"
import { z } from "zod"

export const env = createEnv({
  client: {
    NEXT_PUBLIC_APP_URL: z.string().min(1),
    NEXT_PUBLIC_CALENDLY_LINK: z.string().min(1),
    NEXT_PUBLIC_MAPS_LINK: z.string().min(1),
    NEXT_PUBLIC_PHONE_NUMBER: z.string().min(1),
    NEXT_PUBLIC_EMAIL: z.string().email(),
    NEXT_PUBLIC_WHATSAPP_LINK: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_CALENDLY_LINK: process.env.NEXT_PUBLIC_CALENDLY_LINK,
    NEXT_PUBLIC_MAPS_LINK: process.env.NEXT_PUBLIC_MAPS_LINK,
    NEXT_PUBLIC_PHONE_NUMBER: process.env.NEXT_PUBLIC_PHONE_NUMBER,
    NEXT_PUBLIC_EMAIL: process.env.NEXT_PUBLIC_EMAIL,
    NEXT_PUBLIC_WHATSAPP_LINK: process.env.NEXT_PUBLIC_WHATSAPP_LINK,
  },
})
