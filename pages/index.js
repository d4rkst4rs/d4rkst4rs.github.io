import Head from 'next/head'
import NavBar from '../components/NavBar'
import Image from 'next/image'
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

      {/* Starfield 제거하고 간단한 배경색으로 */}
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        
        <NavBar />

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center text-center min-h-screen px-4">
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
            className="subtitle mt-6 text-lg md:text-xl text-gray-300"
          >
            빛이 있기 전에 어둠이 있었다.
          </MotionDiv>
        </main>

        {/* About Section */}
        <section id="about" className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">About</h2>
            <p className="text-lg text-gray-300">D4rkSt4rs는 게임과 소프트웨어를 개발하는 스튜디오입니다. 게임 개발, 도구 제작, 시스템 설계를 진행합니다.</p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid gap-6">
              <div className="p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors">
                <h3 className="font-medium text-xl">
                  <a href='https://playentry.org/project/68c6b22648d3d76bd9234c49' className="hover:text-blue-400 transition-colors">
                    Escape The BackRooms in Entry
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Team</h2>
            <div className="flex items-center gap-6">
              <Image 
                src="/d4rkst4rs.png" 
                alt="D4rkSt4rGod" 
                width={80} 
                height={80} 
                className="rounded-full"
                unoptimized
              />
              <div>
                <div className="font-medium text-xl">D4rkSt4rGod</div>
                <div className="text-gray-400">스튜디오 설립자</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4 bg-gray-900">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <div className="space-y-3 text-lg">
              <p>📧 Email: <a href="mailto:d4rkst4rgod@gmail.com" className="underline hover:text-blue-400">d4rkst4rgod@gmail.com</a></p>
              <p>🎥 YouTube: <a href="https://youtube.com/@d4rkst4rgod" className="underline hover:text-blue-400">@d4rkst4rgod</a></p>
              <p>💻 GitHub: <a href="https://github.com/d4rkst4rgod" className="underline hover:text-blue-400">github.com/d4rkst4rgod</a></p>
              <p>💬 Discord: <a href="https://discord.com/channel/@me" className="underline hover:text-blue-400">@never.x_star</a></p>
            </div>
          </div>
        </section>

        <footer className="py-12 text-center text-gray-500">
          © {new Date().getFullYear()} D4rkSt4rs. All rights reserved.
        </footer>
      </div>
    </>
  )
}