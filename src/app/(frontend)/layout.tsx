import { Manrope } from 'next/font/google'

import { inter, stolzl } from '@/fonts'

import { Header } from '@/components/Header'

import './globals.css'

const manrope = Manrope({
  subsets: ['cyrillic'],
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata = {
  title: {
    default: 'myELECTRIC',
    template: '%s | myELECTRIC',
  },
  description:
    'Послуги електрика: монтаж проводки, кабельних трас, електрощитів, інверторів та систем резервного живлення. Професійний підхід та надійний результат.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html
      lang="en"
      className={`${stolzl.variable} ${inter.variable} ${manrope.variable} font-stolzl antialiased`}
    >
      <body className={'font-manrope text-me_text'}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
