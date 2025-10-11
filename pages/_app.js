import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>D4rkSt4rs</title>
        <link rel="icon" href="public/favicon.ico" sizes="64x64"/>
        <link rel="apple-touch-icon" href="public/d4rkst4rs-64px.png"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
