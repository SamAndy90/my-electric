import { cn } from '@/lib/utils'

import { ButtonBase, ButtonBaseProps } from './ButtonBase'

export type ButtonProps<T> = {
  size?: 'small' | 'normal' | 'large' | 'wide'
  colorVariant?: 'black' | 'white' | 'outline'
  fullWidth?: boolean
} & ButtonBaseProps<T>

export function Button<T>(props: ButtonProps<T>) {
  const {
    size = 'normal',
    colorVariant = 'black',
    fullWidth = false,
    children,
    className,
    loading = false,
    ...buttonBaseProps
  } = props

  return (
    <ButtonBase
      loading={loading}
      className={{
        button: cn(
          'cursor-pointer text-center whitespace-nowrap transition disabled:cursor-not-allowed disabled:select-none',
          {
            'disabled:opacity-50': !loading,
          },
          {
            'opacity-90': loading,
          },
          {
            // Black
            'bg-me_dark text-me_light transform rounded-md': colorVariant === 'black',
            'hover:bg-me_brand hover:text-me_dark disabled:hover:text-me_light disabled:hover:bg-me_dark disabled:active:scale-100 sm:active:scale-95':
              colorVariant === 'black' && !loading,
          },
          {
            // White
            'transform rounded-full bg-white text-black': colorVariant === 'white',
            'hover:opacity-90 disabled:hover:opacity-50 disabled:active:scale-100 sm:active:scale-95':
              colorVariant === 'white' && !loading,
          },
          // Size
          {
            'text-sm': size === 'small',
            'px-6 py-3 text-lg font-medium': size === 'normal',
            'px-6 py-3 font-medium lg:px-8 lg:py-4 lg:text-lg': size === 'large',
            'px-6 py-2 font-medium md:px-24 lg:px-28 lg:py-3 lg:text-lg': size === 'wide',
            'w-full': fullWidth,
          },
          className?.button,
        ),
        loadingIcon: cn({ 'text-black': colorVariant === 'white' }, className?.loadingIcon),
      }}
      {...buttonBaseProps}
    >
      {children}
    </ButtonBase>
  )
}
