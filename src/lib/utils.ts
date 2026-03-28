import { Media } from '@/payload-types'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImageUrl(url: string) {
  return url.startsWith('http') ? url : `${process.env.NEXT_PUBLIC_SITE_URL}${url}`
}

export function isMedia(value: unknown): value is Media {
  if (value === null || value === undefined) return false
  if (typeof value === 'number') return false
  if (typeof value !== 'object') return false

  return 'id' in value && 'url' in value && 'alt' in value
}
