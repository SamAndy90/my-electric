import { HTMLAttributes, forwardRef } from 'react'

import { cn } from '@/lib/utils'

type ContainerProps = {
  children: React.ReactNode
} & Pick<HTMLAttributes<HTMLDivElement>, 'className'>

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, className }, ref) => {
    return (
      <div ref={ref} className={cn('container mx-auto max-w-7xl px-5', className)}>
        {children}
      </div>
    )
  },
)

Container.displayName = 'Container'
