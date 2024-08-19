import { Inter } from 'next/font/google'
import HomePage from './Layouts/HomePage'
import Head from 'next/head';
// import ReactSpring from '@/Components/testReactSpring';
import { motion } from "framer-motion";

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
  <main className="w-full">
    <Head>
    <meta name="google-adsense-account" content="ca-pub-1951666009365713"/>
    </Head>
    <HomePage/>
    {/* <ReactSpring/> */}
  </main>
  )
}
