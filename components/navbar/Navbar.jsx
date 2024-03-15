import { navLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='padding-x fixed top-0 w-full flex justify-between items-center py-12 z-10'>
        {/* logo */}
        <div>
            <h1 className='text-2xl font-montserrat text-white font-bold'><span className="text-circuit-green">Mutach</span>-<span className="text-electric-blue">tech</span></h1>
        </div>
        <nav className='flex items-center gap-8'>
            {
                navLinks.map((navItem) => (
                    <Link className='text-safety-yellow font-montserrat cursor-pointer font-bold hover:text-graphite transition-all duration-300 text-sm lg:text-lg' href={navItem.redirect}>{navItem.title}</Link>
                ))
            }
        </nav>
    </header>
  )
}

export default Navbar