import { forwardRef } from 'react'

import Image, { ImageProps } from 'next/image'

import { Media } from '@/payload-types'

import { getImageUrl } from '@/lib/utils'

type CMSImageProps = {
  image: number | Media | null | undefined
  customWidth?: number
  customHeight?: number
} & Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'>

export const CMSImage = forwardRef<HTMLImageElement, CMSImageProps>(
  ({ image, fill = false, customWidth, customHeight, ...props }, ref) => {
    if (!image || typeof image === 'number') return null

    const { url, alt, width, height } = image

    if (!url) return null

    const fullUrl = getImageUrl(url)

    return fill ? (
      <Image ref={ref} src={fullUrl} alt={alt || 'Image'} fill {...props} />
    ) : (
      <Image
        ref={ref}
        src={fullUrl}
        alt={alt || 'Image'}
        width={customWidth ? customWidth : (width ?? 800)}
        height={customHeight ? customHeight : (height ?? 600)}
        {...props}
      />
    )
  },
)
CMSImage.displayName = 'CMSImage'
