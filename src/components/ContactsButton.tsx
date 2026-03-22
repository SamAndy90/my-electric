'use client'

import { useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Modal from '@/common/Modal'
import { Button } from '@/common/UI/Buttons'
import { BsGeoAltFill } from 'react-icons/bs'
import { FaTelegram, FaViber } from 'react-icons/fa'

type ContactsButtonProps = {
  label: string
}

export default function ContactsButton({ label }: ContactsButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className={'flex justify-center pt-4'}>
        <Button
          onClick={() => {
            setIsOpen(true)
          }}
          size={'wide'}
          fullWidth
          className={{ button: 'md:w-auto' }}
        >
          {label}
        </Button>
      </div>

      <Modal
        isOpen={isOpen}
        setIsOpen={() => {
          setIsOpen(false)
        }}
      >
        <div className={'bg-me_light flex flex-col items-center justify-between gap-y-8 px-4 py-8'}>
          <div className={'flex flex-col items-center gap-y-2'}>
            <Image className={'max-w-13'} src={'/logo-black.svg'} alt={'Logo'} />
            <Image className={'max-w-30'} src={'/brand-name-black.svg'} alt={'Brand Name'} />
          </div>

          <div className={'flex flex-col items-center gap-y-4'}>
            <div className={'flex flex-col items-center gap-y-2'}>
              <Link className={'hover:text-me_dark transition-colors'} href={'tel:+380989015701'}>
                +38 (098) 901 57 01
              </Link>
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
            </div>
            <div className={'mt-4 flex items-center gap-x-2'}>
              <BsGeoAltFill />
              <p>Кам&apos;янець-Подільський</p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
