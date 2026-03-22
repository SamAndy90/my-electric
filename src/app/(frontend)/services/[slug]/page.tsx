import { CMSImage } from '@/common/CMSImage'
import { Container } from '@/common/Container'

import { getService } from '@/lib/queries/getService'

import ContactsButton from '@/components/ContactsButton'
import { ServiceContent } from '@/components/ServiceContent'

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = await getService({ slug })

  if (!service) return null
  const { title, content, cover_image } = service

  return (
    <section>
      <Container>
        <div className={'pt-28 pb-16'}>
          <div className={'space-y-6 lg:space-y-8'}>
            <h2 className={'text-center text-4xl font-bold lg:text-5xl'}>{title}</h2>
            <div
              className={
                'relative min-h-100 overflow-hidden rounded-xl lg:aspect-video lg:rounded-2xl'
              }
            >
              <CMSImage image={cover_image} fill className={'object-cover'} />
            </div>
            <ServiceContent data={content} />
            <ContactsButton label={'Замовити'} />
          </div>
        </div>
      </Container>
    </section>
  )
}
