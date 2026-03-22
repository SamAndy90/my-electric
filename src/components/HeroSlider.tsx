'use client'

import { Service } from '@/payload-types'
import 'swiper/css'
import 'swiper/css/effect-fade'
import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { HeroSlide } from './HeroSlide'

export type HeroSliderProps = {
  services: Pick<Service, 'id' | 'title' | 'short_description' | 'cover_image' | 'slug'>[]
}

export function HeroSlider({ services }: HeroSliderProps) {
  if (!services || services.length === 0) return null
  return (
    <Swiper
      effect={'fade'}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={1000}
      draggable={true}
      modules={[EffectFade, Autoplay]}
    >
      {services.map((service) => (
        <SwiperSlide key={service.id}>
          <HeroSlide service={service} />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
