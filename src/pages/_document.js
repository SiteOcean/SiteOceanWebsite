import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <title>SiteOcean</title>
      <link rel="icon" href="/favicon.jpg" />
          <link rel="apple-touch-icon" href="/favicon.jpg" />
      <meta
            name="description"
            content="Discover the best local businesses, services, and attractions near you with our powerful local search engine."
          />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
