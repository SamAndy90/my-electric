import localFont from 'next/font/local'
import { Inter } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400'],
  display: 'swap',
})

export const stolzl = localFont({
  variable: '--font-stolzl',
  display: 'swap',
  src: [
    {
      path: './Stolzl-Book.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './Stolzl-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Stolzl-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
})
