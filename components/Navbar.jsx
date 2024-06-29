
"use client"
// components/Navbar.js

import React, { useState } from 'react'
import Link from 'next/link'
import { Raleway } from '@next/font/google'

// Configure the font
const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-raleway',
})

function Navbar() {
  const [nav, setNav] = useState(false)
  function toggleNavbar() {
    setNav(!nav)
  }

  return (
    <div className={`w-full bg-cyan-700/[10%] h-[70px] flex items-center justify-between px-6 md:px-32 md:justify-between z-10 ${raleway.variable}`}>
      <div className="text-cyan-700 font-semibold text-lg md:text-xl tracking-wide" style={{ fontFamily: 'var(--font-raleway)' }}>
        <Link href="/">SANTIAGO PEREIRA</Link>
      </div>
      <div className='text-cyan-700 hidden md:hidden lg:flex gap-5 font-normal text-xl'>
        <Link href="/articles" className='hover:underline'>Articles</Link>
        <Link href="https://www.instagram.com/juansapereira/" target='_blank' className='hover:underline'>Instagram</Link>
        <Link href="/about-me" className='hover:underline'>About me</Link>
      </div>
      <div className='text-cyan-700 flex gap-5 font-normal text-3xl cursor-pointer lg:hidden' onClick={toggleNavbar}>
        ☰
      </div>
      {nav ? 
        <div className="absolute top-0 left-0 w-screen h-full overflow-hidden bg-cyan-700 text-white flex flex-col justify-center items-center gap-10 text-2xl duration-1000 z-50">
          <div className='absolute top-0 right-0 p-5 mr-2 text-2xl font-medium cursor-pointer overflow-hidden' onClick={toggleNavbar}>X</div>
          <div className='absolute top-0 left-0 mt-5 ml-4 text-2xl font-medium border-b overflow-hidden'>Menu</div>
          <Link href="/articles" className='hover:font-bold text-white' onClick={toggleNavbar}>Articles</Link>
          <Link href="https://www.instagram.com/juansapereira/" target='_blank' className='hover:font-bold'>Instagram</Link>
          <Link href="/about-me" className='hover:font-bold' onClick={toggleNavbar}>About me</Link>
          <Link href="/" className='absolute bottom-0 mb-10 border-x px-20 tracking-wider text-base'> SANTIAGO PEREIRA</Link>
        </div> : ""}
    </div>
  )
}

export default Navbar
