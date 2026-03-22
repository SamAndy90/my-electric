'use client'

import Link from 'next/dist/client/link'

import { CMSImage } from '@/common/CMSImage'
import { Container } from '@/common/Container'
import { Button, IconButton } from '@/common/UI/Buttons'
import { Service } from '@/payload-types'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6'
import { useSwiper } from 'swiper/react'

export type HeroSlideProps = {
  service: Pick<Service, 'id' | 'title' | 'short_description' | 'cover_image' | 'slug'>
}
export function HeroSlide({ service }: HeroSlideProps) {
  const swiper = useSwiper()
  if (!service) return null
  const { title, short_description, cover_image } = service
  return (
    <div className={'relative'}>
      <CMSImage image={cover_image} fill className={'object-cover'} />
      <div className={'bg-me_heading/10 absolute inset-0'}></div>
      <Container>
        <div className={'relative flex min-h-screen items-center sm:justify-start'}>
          <div
            className={
              'bg-me_light/70 w-full max-w-160 min-w-75 rounded-xl px-4 py-12 backdrop-blur-sm md:ml-14 md:px-6 lg:ml-16 lg:px-8 lg:py-14'
            }
          >
            <div className={'relative flex flex-col items-start gap-y-4'}>
              <h1 className={'font-inter text-4xl font-bold md:text-5xl lg:text-6xl'}>{title}</h1>
              <p className={'mb-2 line-clamp-3 text-pretty lg:text-lg'}>{short_description}</p>
              <Link href={`/services/${service.slug?.trim()}`}>
                <Button>Детальніше</Button>
              </Link>
            </div>
          </div>
          <IconButton
            size={'large'}
            colorVariant={'slider'}
            onClick={() => swiper.slidePrev()}
            startIcon={
              <FaChevronLeft
                className={'group-hover:text-me_dark text-me_light text-xl transition-colors'}
              />
            }
            className={{ button: 'absolute top-1/2 left-0 hidden -translate-y-1/2 md:block' }}
          />
          <IconButton
            size={'large'}
            colorVariant={'slider'}
            onClick={() => swiper.slideNext()}
            startIcon={
              <FaChevronRight
                className={'group-hover:text-me_dark text-me_light text-xl transition-colors'}
              />
            }
            className={{ button: 'absolute top-1/2 right-0 hidden -translate-y-1/2 md:block' }}
          />
        </div>
      </Container>
    </div>
  )
}
