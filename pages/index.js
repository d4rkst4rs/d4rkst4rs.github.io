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
    y: 30
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

// 팀 멤버 데이터 - 이렇게 분리해두면 관리가 쉬워요!
const teamMembers = [
  {
    name: "D4rkSt4rGod",
    role: "스튜디오 설립자",
    image: "/d4rkst4rs.png",
    link: "https://naver.me/xTS8njxd",
    alt: "D4rkSt4rGod - 스튜디오 설립자 및 리드 개발자"
  },
  // {
  //   name: "새로운 팀원", // 실제 이름으로 변경해주세요
  //   role: "역할", // 실제 역할로 변경해주세요
  //   image: "/d4rkst4rs.png", // 실제 이미지 경로로 변경해주세요
  //   link: "#", // 실제 링크로 변경해주세요
  //   alt: "새로운 팀원 - 역할" // 실제 정보로 변경해주세요
  // }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>D4rkSt4rs Studio - Game & Software Development</title>
        <meta name="description" content="D4rkSt4rs는 게임과 소프트웨어를 개발하는 스튜디오입니다. 게임 개발, 도구 제작, 시스템 설계를 진행합니다." />
        <meta name="keywords" content="게임개발, 소프트웨어, 개발스튜디오, D4rkSt4rs, 게임제작, 인디게임" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="D4rkSt4rs Studio" />
        <meta property="og:description" content="Just because you can't see it doesn't mean it doesn't exist." />
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
            className="hero-title text-3xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight max-w-6xl font-bold"
          >
            Just because you can't see it doesn't mean it doesn't exist.
          </MotionDiv>
          <MotionDiv 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 0.6, duration: 1 }}
            className="subtitle mt-8 text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl"
          >
            보이지 않는다고 존재하지 않는것은 아니다.
          </MotionDiv>
        </main>

        {/* Projects Section */}
        <section id="projects" className="py-24 px-4">
          <div className="max-w-4xl mx-auto">
            <MotionDiv
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={sectionVariants}
            >
              <h2 className="text-3xl font-bold mb-8">Projects</h2>
            </MotionDiv>
            
            <MotionDiv
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="grid gap-6"
            >
              <div className="group p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-all duration-300 cursor-pointer">
                <h3 className="font-bold text-xl mb-3 group-hover:text-gray-300 transition-colors">
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
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* Team Section - 개선된 구조 */}
        <section id="team" className="py-24 px-4">
          <MotionDiv
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8">Team</h2>
              
              <div className="space-y-6">
                {teamMembers.map((member, index) => (
                  <MotionDiv
                    key={member.name}
                    variants={cardVariants}
                    className="flex items-center gap-6 p-6 border border-gray-700 rounded-lg hover:border-gray-500 transition-colors"
                  >
                    <Image 
                      src={member.image} 
                      alt={member.alt} 
                      width={80} 
                      height={80} 
                      className="rounded-full"
                      priority={index === 0} // 첫 번째 멤버만 priority
                    />
                    <div>
                      <div className="font-medium text-xl">
                        <a 
                          href={member.link} 
                          className="hover:text-gray-300 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {member.name}
                        </a>
                      </div>
                      <div className="text-gray-400">{member.role}</div>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          </MotionDiv>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 px-4">
          <MotionDiv
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Contact</h2>
              <div className="space-y-3 text-lg">
                <p>Email: <a href="mailto:d4rkst4rgod@gmail.com" className="underline hover:text-blue-400 transition-colors">d4rkst4rgod@gmail.com</a></p>
                <p>YouTube: <a href="https://youtube.com/@d4rkst4rgod" className="underline hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">@d4rkst4rgod</a></p>
                <p>GitHub: <a href="https://github.com/d4rkst4rgod" className="underline hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">github.com/d4rkst4rgod</a></p>
                <p>Discord: <a href="https://discord.com/channel/@me" className="underline hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">@never.x_star</a></p>
                <p>Entry: <a href="https://naver.me/xTS8njxd" className="underline hover:text-blue-400 transition-colors" target="_blank" rel="noopener noreferrer">D4rkSt4rGod</a></p>
              </div>
            </div>
          </MotionDiv>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center text-gray-500">
          <MotionDiv
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p>© {new Date().getFullYear()} D4rkSt4rs. All rights reserved.</p>
          </MotionDiv>
        </footer>
      </div>
    </>
  )
}