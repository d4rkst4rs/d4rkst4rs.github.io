import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>D4rkSt4rs - Test</title>
      </Head>
      
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">✅ 기본 테스트 성공!</h1>
          <p className="text-lg">Next.js + GitHub Pages 정상 작동 중</p>
          <p className="mt-4 text-gray-400">이 화면이 보이면 기본 설정은 완료되었습니다</p>
        </div>
      </div>
    </>
  )
}