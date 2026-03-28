import { Metadata } from 'next'

import { getServices } from '@/lib/queries/getServices'
import { queryPageBySlug } from '@/lib/queries/queryPageBySlug'
import { getImageUrl, isMedia } from '@/lib/utils'

import { HeroSlider } from '@/components/HeroSlider'

// const ogImageUrl = '/opengraph-image.jpg'

// type Props = {
//   params: Promise<{ slug: string }>
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>
// }

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000'

  console.log('meta baseURL: ', baseUrl)

  const page = await queryPageBySlug({ slug: 'home' })

  if (!page) return {}

  const meta = page.meta || {}
  console.log('homepage meta: ', meta)

  const ogImageUrl = isMedia(meta.openGraph?.image)
    ? getImageUrl(meta.openGraph?.image?.url ?? '')
    : '/opengraph-image.jpg'

  return {
    title:
      meta.title ?? 'myELECTRIC — Електрик Кам’янець-Подільський | Монтаж проводки та інверторів',
    description:
      meta.description ?? 'myELECTRIC — Послуги електрика, монтаж проводки та інверторів',
    keywords: meta.keywords ?? [
      'електрик',
      'електромонтаж',
      'монтаж проводки',
      'кабельні траси',
      'інвертор',
      'акумулятор',
      'резервне живлення',
      'електрощит',
      'послуги електрика',
    ],
    metadataBase: new URL('https://www.my-electric.website/'),
    openGraph: {
      title: meta.openGraph?.title ?? 'myELECTRIC — Професійні електромонтажні роботи',
      description:
        meta.openGraph?.description ??
        'Монтаж електропроводки, інверторів та систем резервного живлення. Надійні рішення для дому та бізнесу.',
      siteName: meta.openGraph?.siteName ?? 'myELECTRIC',
      images: [ogImageUrl],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.openGraph?.title ?? 'myELECTRIC — Професійні електромонтажні роботи',
      description:
        meta.openGraph?.description ??
        'Монтаж електропроводки, інверторів та систем резервного живлення. Надійні рішення для дому та бізнесу.',
      images: [ogImageUrl],
    },
  }
}

export default async function HomePage() {
  const services = await getServices()

  if (!services || services.length === 0) return null

  return (
    <section>
      <HeroSlider services={services} />
    </section>
  )
}
