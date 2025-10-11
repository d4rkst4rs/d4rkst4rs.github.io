import { useState } from 'react'
import Image from 'next/image'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* 로고 추가 */}
          <div className="flex items-center gap-3">
            <Image 
              src="/d4rkst4rs.png" 
              alt="D4rkSt4rs Studio Logo" 
              width={32} 
              height={32} 
              className="rounded"
            />
            <div className="text-xl font-bold whitespace-nowrap">
              D4rkSt4rs
            </div>
          </div>
          
          {/* 데스크탑 메뉴 */}
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-gray-300 transition-colors">About</a>
            <a href="#projects" className="hover:text-gray-300 transition-colors">Projects</a>
            <a href="#team" className="hover:text-gray-300 transition-colors">Team</a>
            <a href="#contact" className="hover:text-gray-300 transition-colors">Contact</a>
          </div>
          
          {/* 모바일 메뉴 버튼 */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* 모바일 드롭다운 메뉴 */}
        {isOpen && (
          <div className="md:hidden bg-black/95 border-t border-gray-800">
            <div className="py-2 space-y-1">
              <a href="#about" className="block px-4 py-2 hover:bg-gray-800">About</a>
              <a href="#projects" className="block px-4 py-2 hover:bg-gray-800">Projects</a>
              <a href="#team" className="block px-4 py-2 hover:bg-gray-800">Team</a>
              <a href="#contact" className="block px-4 py-2 hover:bg-gray-800">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}