import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>D4rkSt4rs</title>
      </Head>

      <div className="min-h-screen relative overflow-hidden bg-black text-white">
        <div className="starfield">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>

        <NavBar />

        <main className="flex flex-col items-center justify-center text-center min-h-screen">
          <h1 className="hero-title text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl">
            Before there was light there was darkness.
          </h1>
          <p className="subtitle mt-6">
            빛이 있기 전에 어둠이 있었다.
          </p>
        </main>
      </div>
    </>
  )
}