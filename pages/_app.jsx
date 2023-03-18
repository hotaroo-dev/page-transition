import { M_PLUS_Rounded_1c } from 'next/font/google'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'

const mplus = M_PLUS_Rounded_1c({
  subsets: ['latin'],
  variable: '--font-mplus',
  weight: ['400', '700']
})

export default function App({ Component, pageProps, router }) {
  return (
    <div className={`${mplus.variable} font-sans`}>
      <Navbar />
      <AnimatePresence initial={false}>
        <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
    </div>
  )
}
