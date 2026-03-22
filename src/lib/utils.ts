import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(url: string) {
  return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_SITE_URL}${url}`
}
