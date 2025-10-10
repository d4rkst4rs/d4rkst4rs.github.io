import Head from 'next/head'
import NavBar from '../components/NavBar'
import Image from 'next/image'

// framer-motion을 dynamic import로 변경
import dynamic from 'next/dynamic'
const MotionDiv = dynamic(() => import('framer-motion').then(mod => mod.motion.div), {
  ssr: false
})

export default function Home() {
  return (
    <>
      <Head>
        <title>D4rkSt4rs</title>
      </Head>

      <div className="min-h-screen relative overflow-hidden">
        <div className="starfield">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>

        <NavBar />

        <main className="flex flex-col items-center justify-center text-center min-h-screen site-container">
          <MotionDiv 
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}} 
            transition={{duration:1}}
            className="hero-title text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl"
          >
            Before there was light there was darkness.
          </MotionDiv>
          <MotionDiv 
            initial={{opacity:0}} 
            animate={{opacity:1}} 
            transition={{delay:0.6}}
            className="subtitle mt-6"
          >
            빛이 있기 전에 어둠이 있었다.
          </MotionDiv>
        </main>

        {/* 나머지 섹션들... */}
      </div>
    </>
  )
}