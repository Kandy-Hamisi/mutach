import { footerLinks } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='max-container flex justify-between'>
        <div className='flex flex-wrap gap-12 justify-between w-full'>
            {
                footerLinks.map((footerCategory) => (
                    <div key={footerCategory.title} className='mb-8 text-white'>
                        <h4 className='font-bold text-3xl font-palanquin mb-4  border-b-4 border-orange-primary'>{footerCategory.category}</h4>
                        <div className='flex flex-col space-y-4'>
                            {
                                footerCategory.links.map((footerLink) => (
                                    <div key={footerLink.text} className='flex text-slate-gray items-center space-x-4'>
                                        <a href={footerLink.url} className='font-bold hover:text-orange-primary transition-colors duration-300 '>{footerLink.text}</a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    </footer>
  )
}

export default Footer