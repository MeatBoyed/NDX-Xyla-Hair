import { PropsWithChildren } from "react"
import dynamic from "next/dynamic"

import { env } from "@/env.mjs"

import { Dialog, DialogContent, DialogTrigger } from "./dialog"
import { Spinner } from "./loading-spinner"

const CalendlyEmbed = dynamic(() => import("../ndx/calendly-embed"), {
  loading: () => <Spinner />,
})

export default function BookingButton({ children }: PropsWithChildren) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl  pt-2">
        <CalendlyEmbed url={env.NEXT_PUBLIC_CALENDLY_LINK} />
      </DialogContent>
    </Dialog>
  )
}
