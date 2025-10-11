import Link from 'next/link'
import Image from 'next/image'


export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* 로고 - 모바일에서 줄바꿈 방지 */}
          <div className="text-xl font-bold whitespace-nowrap">
            D4rkSt4rs
          </div>
          
          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
            <a href="#team" className="hover:text-gray-300 transition-colors">Team</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
          
          {/* 모바일 햄버거 메뉴 */}
          <div className="md:hidden">
            <button className="p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}