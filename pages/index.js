import Head from 'next/head'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import dynamic from 'next/dynamic'

// 성능 최적화된 Dynamic Import
const MotionDiv = dynamic(() => 
  import('framer-motion').then((mod) => mod.motion.div), {
  ssr: false,
  loading: () => <div className="min-h-[200px]" />
})

// 스크롤 애니메이션 variants
const sectionVariants = {
  offscreen: {
    opacity: 0,
    y: 50
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const cardVariants = {
  offscreen: {
    opacity: 0,
    scale: 0.9
  },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <title>D4rkSt4rs Studio - Game & Software Development</title>
        <meta name="description" content="D4rkSt4rs는 게임과 소프트웨어를 개발하는 스튜디오입니다. 게임 개발, 도구 제작, 시스템 설계를 진행합니다." />
        <meta name="keywords" content="게임개발, 소프트웨어, 개발스튜디오, D4rkSt4rs, 게임제작, 인디게임" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="D4rkSt4rs Studio" />
        <meta property="og:description" content="Before there was light there was darkness." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 전체 배경 검정색 통일 */}
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        
        <NavBar />

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center text-center min-h-screen px-4">
          <MotionDiv 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1 }}
            className="hero-title text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight max-w-6xl font-bold"
          >
            Before there was light there was darkness.
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6, duration: 1 }}
            className="subtitle mt-8 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl"
          >
            빛이 있기 전에 어둠이 있었다.
          </MotionDiv>
        </main>

        {/* About Section */}
        <section id="about" className="py-32 px-4">
          <MotionDiv
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">About</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <MotionDiv
                  variants={cardVariants}
                  className="p-8 border border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black"
                >
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Our Mission</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    D4rkSt4rs는 혁신적인 게임과 소프트웨어를 개발하는 크리에이티브 스튜디오입니다. 
                    어둠 속에서 빛을 창조하는 것처럼, 우리는 복잡한 문제를 아름다운 솔루션으로 변모시킵니다.
                  </p>
                </MotionDiv>
                <MotionDiv
                  variants={cardVariants}
                  className="p-8 border border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black"
                >
                  <h3 className="text-2xl font-bold mb-4 text-purple-400">What We Do</h3>
                  <ul className="text-lg text-gray-300 space-y-3">
                    <li>• 게임 개발 & 프로토타이핑</li>
                    <li>• 크리에이티브 코딩</li>
                    <li>• 웹 & 모바일 애플리케이션</li>
                    <li>• 개발 도구 & 라이브러리</li>
                  </ul>
                </MotionDiv>
              </div>
            </div>
          </MotionDiv>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-4 bg-gradient-to-b from-black to-gray-900">
          <MotionDiv
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Projects</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Project 1 */}
                <MotionDiv
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group p-6 border border-gray-700 rounded-xl bg-black hover:border-blue-500 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-bold text-xl mb-3 group-hover:text-blue-400 transition-colors">
                    <a 
                      href='https://playentry.org/project/68c6b22648d3d76bd9234c49' 
                      className="block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Escape The BackRooms in Entry
                    </a>
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    엔트리 플랫폼에서 구현한 공포 어드벤처 게임
                  </p>
                </MotionDiv>

                {/* Project 2 - 새로운 프로젝트 추가 */}
                <MotionDiv
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group p-6 border border-gray-700 rounded-xl bg-black hover:border-purple-500 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-bold text-xl mb-3 group-hover:text-purple-400 transition-colors">
                    D4rk Engine
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    게임 개발을 위한 커스텀 엔진 프로젝트
                  </p>
                </MotionDiv>

                {/* Project 3 - 새로운 프로젝트 추가 */}
                <MotionDiv
                  variants={cardVariants}
                  whileHover={{ scale: 1.05 }}
                  className="group p-6 border border-gray-700 rounded-xl bg-black hover:border-green-500 transition-all duration-300 cursor-pointer"
                >
                  <h3 className="font-bold text-xl mb-3 group-hover:text-green-400 transition-colors">
                    Star Network
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    분산형 커뮤니케이션 플랫폼
                  </p>
                </MotionDiv>
              </div>
            </div>
          </MotionDiv>
        </section>

        {/* Team Section */}
        <section id="team" className="py-32 px-4">
          <MotionDiv
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Team</h2>
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 border border-gray-800 rounded-2xl bg-gradient-to-br from-gray-900 to-black">
                <MotionDiv
                  variants={cardVariants}
                  className="flex-shrink-0"
                >
                  <Image 
                    src="/d4rkst4rs.png" 
                    alt="D4rkSt4rGod - 스튜디오 설립자 및 리드 개발자" 
                    width={120} 
                    height={120} 
                    className="rounded-full border-4 border-blue-500"
                    priority
                  />
                </MotionDiv>
                <MotionDiv
                  variants={cardVariants}
                  className="text-center md:text-left"
                >
                  <div className="font-bold text-2xl mb-2">D4rkSt4rGod</div>
                  <div className="text-blue-400 text-lg mb-4">스튜디오 설립자 & 리드 개발자</div>
                  <p className="text-gray-300 leading-relaxed">
                    창의적인 코딩과 게임 개발에 열정을 가진 풀스택 개발자. 
                    새로운 기술을 탐구하고 혁신적인 프로젝트를 통해 세상에 의미 있는 영향을 주는 것을 목표로 합니다.
                  </p>
                </MotionDiv>
              </div>
            </div>
          </MotionDiv>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-4 bg-gradient-to-b from-gray-900 to-black">
          <MotionDiv
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Contact</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <MotionDiv
                  variants={cardVariants}
                  className="p-6 border border-gray-700 rounded-xl hover:border-blue-500 transition-colors"
                >
                  <h3 className="font-bold text-xl mb-4 text-blue-400">Get In Touch</h3>
                  <p className="text-gray-300 mb-4">
                    새로운 프로젝트, 협업, 또는 궁금한 점이 있으시다면 언제든지 연락주세요.
                  </p>
                  <div className="space-y-2">
                    <p className="text-lg">
                      📧 <a href="mailto:d4rkst4rgod@gmail.com" className="underline hover:text-blue-400 transition-colors">d4rkst4rgod@gmail.com</a>
                    </p>
                  </div>
                </MotionDiv>
                
                <MotionDiv
                  variants={cardVariants}
                  className="p-6 border border-gray-700 rounded-xl hover:border-purple-500 transition-colors"
                >
                  <h3 className="font-bold text-xl mb-4 text-purple-400">Follow Us</h3>
                  <div className="space-y-3 text-lg">
                    <p className="flex items-center gap-2">
                      <span className="text-red-500">▶</span>
                      <a href="https://youtube.com/@d4rkst4rgod" className="underline hover:text-red-400 transition-colors" target="_blank" rel="noopener noreferrer">
                        YouTube
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-gray-300">⚫</span>
                      <a href="https://github.com/d4rkst4rgod" className="underline hover:text-gray-400 transition-colors" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-blue-500">💬</span>
                      <a href="https://discord.com/channel/@me" className="underline hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">
                        Discord
                      </a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-green-500">🎮</span>
                      <a href="https://naver.me/xTS8njxd" className="underline hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">
                        Entry
                      </a>
                    </p>
                  </div>
                </MotionDiv>
              </div>
            </div>
          </MotionDiv>
        </section>

        <footer className="py-12 text-center text-gray-500 border-t border-gray-800">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p>© {new Date().getFullYear()} D4rkSt4rs Studio. All rights reserved.</p>
            <p className="mt-2 text-sm">Built with Next.js, Tailwind CSS, and Framer Motion</p>
          </MotionDiv>
        </footer>
      </div>
    </>
  )
}