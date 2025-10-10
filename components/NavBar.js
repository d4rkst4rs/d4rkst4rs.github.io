import Link from 'next/link'
import Image from 'next/image'

export default function NavBar(){ 
  return (
    <nav className="w-full flex items-center justify-between py-4 site-container">
      <div className="flex items-center space-x-3">
        <Image src="/d4rkst4rs.png" alt="D4rkSt4rs" width={44} height={44} />
        <span className="font-semibold text-lg">D4rkSt4rs</span>
      </div>
      <div className="space-x-4 text-sm">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#team">Team</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}
