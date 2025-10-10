import Head from 'next/head'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home(){
  return (
    <>
      <Head>
        <a href='#'><title>D4rkSt4rs</title></a>
      </Head>

      <div className="min-h-screen relative overflow-hidden">
        <div className="starfield">
          <div className="stars"></div>
          <div className="stars2"></div>
          <div className="stars3"></div>
        </div>

        <NavBar />

        <main className="flex flex-col items-center justify-center text-center min-h-screen site-container">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:1}} className="hero-title text-4xl md:text-6xl lg:text-7xl leading-tight max-w-4xl">
            Before there was light there was darkness.
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.6}} className="subtitle mt-6">
            빛이 있기 전에 어둠이 있었다.
          </motion.p>
            {/* <div className="mt-10 flex gap-4"> */}
            {/* <a href="#projects" className="px-4 py-2 border border-white/20 rounded">Projects</a> */}
            {/* <a href="#contact" className="px-4 py-2 border border-white/20 rounded">Contact</a> */}
          {/* </div> */}
        </main>

        <section id="about" className="py-24 site-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">About</h2>
            <p>D4rkSt4rs는 게임과 소프트웨어를 개발하는 스튜디오입니다. 게임 개발, 도구 제작, 시스템 설계를 진행합니다.</p>
          </div>
        </section>

        <section id="projects" className="py-24 site-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Projects</h2>
            <div className="grid gap-6">
              <div className="p-4 border border-white/10 rounded">
                <h3 className="font-medium"><a href='https://playentry.org/project/68c6b22648d3d76bd9234c49'>Escape The BackRooms in Entry</a></h3>
              </div>
            </div>
          </div>
        </section>

        <section id="team" className="py-24 site-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6">Team</h2>
            <div className="flex items-center gap-4">
              <Image src="/d4rkst4rs.png" alt="You" width={72} height={72} className="rounded" />
              <div>
                <div className="font-medium">D4rkSt4rGod</div>
                <div className="text-sm text-white/70">스튜디오 설립자</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 site-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p>email : <a href="https://gmail.com" className="underline">d4rkst4rgod@gmail.com</a></p>
            <p className="mt-2">Youtube : <a href="https://youtube.com/@d4rkst4rgod" className="underline">@d4rkst4rgod</a></p>
            <p className="mt-2">GitHub : <a href="https://github.com/d4rkst4rgod" className="underline">github.com/d4rkst4rgod</a></p>
            <p className="mt-2">Discord: <a href="https://discord.com/channel/@me" className="underline">@never.x_star</a></p>
          </div>
        </section>

        <footer className="py-10 text-center text-sm text-white/60 site-container">
          © D4rkSt4rs
        </footer>
      </div>
    </>
  )
}
