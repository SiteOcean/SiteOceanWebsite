import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name="google-adsense-account" content="ca-pub-1951666009365713"></meta>
      <title>SiteOcean</title>
      <link rel="icon" href="/favicon.jpg" />
          <link rel="apple-touch-icon" href="/favicon.jpg" />
      <meta
            name="description"
            content="Discover the best local businesses, services, and attractions near you with our powerful local search engine."
          />
                  {/* Set the theme color for mobile status bar */}
        {/* <meta name="theme-color" content="#59d7e7" /> */}

      <body>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1951666009365713"
     crossOrigin="anonymous"></script>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
