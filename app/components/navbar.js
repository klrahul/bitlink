import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='bg-purple-700 flex items-center justify-between py-3 px-10 absolute w-[100%]'>
        <div className='font-bold text-2xl cursor-pointer'><Link href='/'>BitLinks</Link></div>
         <ul className='flex gap-5 items-center'>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shortner">Shortner</Link></li>
            <li><Link href="/about">About</Link></li>
            <li className='flex gap-5'>
                <button className='bg-purple-500 rounded-md py-1 px-2'>Try Now</button>
                <button className='bg-purple-500 rounded-md py-1 px-2'>Github</button>
            </li>
         </ul>
      </nav>
    </div>
  )
}

export default Navbar
