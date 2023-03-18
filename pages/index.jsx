import Head from 'next/head'
import { motion as m } from 'framer-motion'
import { container, item } from '../animation'
import Layout from '@/components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Home Page</title>
      </Head>
      <div className="self-end p-1 overflow-hidden">
        <m.h1
          className="text-6xl text-center lg:text-8xl lg:text-right"
          initial={{ y: '100%' }}
          animate={{ y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          Happy Pickle
        </m.h1>
      </div>
      <div className="self-center flex justify-between">
        <m.div variants={container} initial="hidden" animate="visible">
          {['Design', 'Company', '2022'].map((text, idx) => (
            <div key={idx} className="overflow-hidden">
              <m.h2 variants={item}>{text}</m.h2>
            </div>
          ))}
        </m.div>
        <m.div variants={container} initial="hidden" animate="visible">
          {[
            'This pickle gonna take you smile.',
            'Scottish designs to make you happy.',
            'Click contact for cool transition.'
          ].map((text, idx) => (
            <div key={idx} className="overflow-hidden">
              <m.h3 variants={item}>{text}</m.h3>
            </div>
          ))}
        </m.div>
      </div>
    </Layout>
  )
}
