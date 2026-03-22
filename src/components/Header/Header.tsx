import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/common/Container'
import { BsGeoAltFill } from 'react-icons/bs'
import { FaTelegram, FaViber } from 'react-icons/fa'

export function Header() {
  return (
    <header className={'bg-me_dark text-me_light fixed inset-x-0 top-0 z-50 py-3'}>
      <Container>
        <div className={'flex items-center justify-between'}>
          <Link href={'/'} className={'flex items-center gap-x-2'}>
            <Image className={'max-w-10'} src={'/my-electric-logo.svg'} alt={'Logo'} />
            <Image className={'max-w-28'} src={'/brand-name.svg'} alt={'Brand Name'} />
          </Link>
          <div className={'flex items-end gap-x-8'}>
            <div className={'hidden items-center gap-x-2 lg:flex'}>
              <BsGeoAltFill />
              <p>Кам&apos;янець-Подільський</p>
            </div>
            <div className={'flex flex-col items-end gap-y-1'}>
              <div className={'flex items-center gap-x-2'}>
                <Link href={'https://t.me/@myElectric_23'} target={'_blank'}>
                  <FaTelegram
                    className={'hover:text-me_brand text-3xl transition-colors lg:text-2xl'}
                  />
                </Link>
                <Link href={'viber://chat?number=+380989015701'} target={'_blank'}>
                  <FaViber
                    className={'hover:text-me_brand text-3xl transition-colors lg:text-2xl'}
                  />
                </Link>
              </div>
              <Link className={'hover:text-me_brand transition-colors'} href={'tel:+380989015701'}>
                +38 (098) 901 57 01
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
