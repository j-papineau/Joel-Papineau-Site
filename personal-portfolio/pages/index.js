import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import NavBarCustom from '@/components/NavBarCustom'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <div>
      <Head>
        <title>Joel Papineau | Full-Stack Dev</title>
        <meta name="Joel Papineau Portfolio" content=":)"></meta>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <NavBarCustom></NavBarCustom>
      </main>
   </div>
  )
}
