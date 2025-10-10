import Head from 'next/head'
import NavBar from '../components/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>D4rkSt4rs</title>
      </Head>
      
      <div className="min-h-screen bg-black text-white">
        <NavBar />
        <div className="flex items-center justify-center min-h-screen">
          <h1 className="text-4xl">NavBar 테스트</h1>
        </div>
      </div>
    </>
  )
}