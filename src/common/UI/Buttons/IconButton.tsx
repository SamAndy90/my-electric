import { ButtonBase, ButtonBaseProps } from '@/common/UI/Buttons'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export type IconButtonProps<T> = {
  size?: 'normal' | 'large'
  colorVariant?: 'default' | 'slider'
} & Omit<ButtonBaseProps<T>, 'children' | 'endIcon'>

export function IconButton<T>(props: IconButtonProps<T>) {
  const {
    size = 'normal',
    colorVariant = 'default',
    className,
    loading = false,
    ...buttonBaseProps
  } = props

  return (
    <ButtonBase
      loading={loading}
      className={{
        button: twMerge(
          clsx(
            'group cursor-pointer transition-colors disabled:cursor-not-allowed',
            {
              'disabled:opacity-50': !loading,
            },
            {
              'opacity-90': loading,
            },
            {
              // Default
              'border-me_heading hover:border-me_dark border': colorVariant === 'default',
            },
            {
              // Slider
              'bg-me_dark hover:bg-me_brand': colorVariant === 'slider',
            },

            {
              'size-8 rounded-md': size === 'normal',
              'rounded-full p-3.5 lg:p-4': size === 'large',
            },
            className?.button,
          ),
        ),
        loadingIcon: className?.loadingIcon,
      }}
      {...buttonBaseProps}
    ></ButtonBase>
  )
}
