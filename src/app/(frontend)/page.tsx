import { getServices } from '@/lib/queries/getServices'

import { HeroSlider } from '@/components/HeroSlider'

export default async function HomePage() {
  const services = await getServices()

  if (!services || services.length === 0) return null

  return (
    <section>
      <HeroSlider services={services} />
    </section>
  )
}
