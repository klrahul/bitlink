import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-purple-700 flex items-center justify-between py-3 px-10 absolute w-[100%]'>
        <div className='font-bold text-2xl cursor-pointer'><Link className="gap-2 flex items-center" href='/'>
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 13a5 5 0 0 1 0-7l3-3a5 5 0 0 1 7 7l-1 1M14 11a5 5 0 0 1 0 7l-3 3a5 5 0 0 1-7-7l1-1"/>
</svg>

BitLinks</Link></div>
        <ul className='flex gap-5 items-center'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/shortner">Shortner</Link></li>
          <li><Link href="/about">About</Link></li>
          <li className='flex gap-5'>
            <Link className='bg-purple-500 rounded-md py-1 px-2' href="/shortner">Try Now</Link>
            <Link href="https://github.com/klrahul/bitlink" className='bg-purple-500 rounded-md py-1 px-2'>Github</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
