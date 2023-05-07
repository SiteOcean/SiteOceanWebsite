import '@/styles/globals.css'
import Layout from './Layouts/Layout'
import 'tailwindcss/tailwind.css';


export default function App({ Component, pageProps }) {
  return  <Layout>
  <Component {...pageProps} />
</Layout>
}
