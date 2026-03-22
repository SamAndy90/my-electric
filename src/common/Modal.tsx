'use client'

import { Dispatch, SetStateAction } from 'react'

import { IconButton } from '@/common/UI/Buttons'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import clsx from 'clsx'

type ModalProps = {
  children?: React.ReactNode
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export default function Modal({ children, isOpen, setIsOpen }: ModalProps) {
  return (
    <Dialog open={isOpen} onClose={setIsOpen} className={'relative z-101'}>
      <DialogBackdrop
        transition
        className={
          'bg-me_dark/35 fixed inset-0 backdrop-blur-sm duration-300 ease-out data-closed:opacity-0'
        }
      />
      <div className="fixed inset-0 flex w-screen items-center justify-center px-4 py-5">
        <DialogPanel transition className="relative duration-500 ease-out data-closed:opacity-0">
          <IconButton
            title={'Закрити'}
            onClick={() => setIsOpen(false)}
            className={{
              button: 'hover:border-me_dark absolute top-4 right-4 z-102 transition-colors',
            }}
            startIcon={
              <span
                className={clsx(
                  'relative block size-4 h-0.5 transition-colors lg:w-4.5',
                  'after:bg-me_heading after:absolute after:inset-0 after:rounded-full',
                  'before:bg-me_heading group-hover:before:bg-me_dark before:absolute before:inset-0 before:rounded-full',
                  'group-hover:after:bg-me_dark after:transform after:transition-transform after:duration-300 after:ease-in group-hover:after:rotate-45',
                  'before:transform before:transition-transform before:duration-300 before:ease-in group-hover:before:-rotate-45',
                )}
              />
            }
          />
          <div className={'relative h-full min-h-full overflow-hidden rounded-[20px]'}>
            {children}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  )
}
