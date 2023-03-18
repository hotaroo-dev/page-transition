import Head from 'next/head'
import { motion as m } from 'framer-motion'
import { container, item } from '../animation'
import Layout from '@/components/layout'

export default function contact() {
  return (
    <Layout>
      <Head>
        <title>Contact Page</title>
      </Head>
      <div className="self-end p-1 overflow-hidden">
        <m.h1
          className="pb-[2px] text-6xl text-center lg:text-8xl lg:text-right"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Let&#39;s Talk
        </m.h1>
      </div>
      <div className="self-center flex gap-20">
        <div className="text-base lg:text-2xl">
          <h4>Find me:</h4>
        </div>
        <div className="text-2xl lg:text-4xl">
          <m.ul
            className="space-y-2 underline underline-offset-4"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {['Twitter', 'Instagram', 'LinkedIn', 'Dribble'].map(
              (link, idx) => (
                <div key={idx} className="overflow-hidden pb-1">
                  <m.li variants={item}>{link}</m.li>
                </div>
              )
            )}
          </m.ul>
        </div>
      </div>
    </Layout>
  )
}
