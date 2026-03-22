import { CMSImage } from '@/common/CMSImage'
import { Service } from '@/payload-types'

export type ServiceContentProps = {
  data: Service['content']
}

export function ServiceContent({ data }: ServiceContentProps) {
  if (!data || data.length === 0) return null
  console.log('datadta', data)

  return (
    <div className={'space-y-6 lg:space-y-8'}>
      {data?.map((item) => {
        switch (item.blockType) {
          case 'text':
            return (
              <div key={item.id} className={'space-y-4'}>
                {item.text &&
                  item.text.length > 0 &&
                  item.text.map((p) => (
                    <p className={'indent-6 lg:indent-8'} key={p.id}>
                      {p.paragraph}
                    </p>
                  ))}
              </div>
            )
          case 'image':
            return (
              <div
                key={item.id}
                className={
                  'relative mx-auto min-h-100 overflow-hidden rounded-xl lg:aspect-video lg:max-w-[84%] lg:rounded-2xl'
                }
              >
                <CMSImage fill className={'object-cover'} image={item.image} />
              </div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
