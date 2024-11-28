import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

import { env } from "@/env.mjs"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(objectKey: string) {
  return `${env.NEXT_PUBLIC_CLOUDFRONT_BASEURL}/${FOLDER}/${objectKey}`
}
