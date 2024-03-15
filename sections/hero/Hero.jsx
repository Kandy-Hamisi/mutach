import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-screen max-container landing-hero-bg flex gap-10 items-center'>
        {/* left */}
        <div>
            <div className='flex justify-start max-w-[60em]'>
                <h1 className='font-montserrat leading-[1.5em] text-8xl font-bold text-white'>Engineering The <span className="text-circuit-green">Future</span> With Mutach <span className="text-electric-blue">Tech</span></h1>
            </div>
            <div className='mt-8 glass-morphism max-w-[35em]'>
                <p className='leading-[40px] max-w-[30em] text-white text-xl'>Welcome to Mutach Tech, where precision meets innovation. Explore our cutting-edge solutions for a smarter tomorrow.</p>
            </div>
            <div className='mt-8 flex items-center gap-8'>
                <button className='p-2 rounded-md bg-safety-yellow text-electric-blue font-bold text-md cursor-pointer hover:bg-transparent border border-safety-yellow transition-all duration-300'>Discover Our Solutions</button>
                <button className='p-2 rounded-md border border-electric-blue text-safety-yellow font-bold background-transparent cursor-pointer hover:bg-electric-blue transition-all duration-300'>Learn More</button>
            </div>
        </div>
        {/* right */}
        <div className='relative'>
            <div className='relative h-[400px] w-[400px]'>
                <Image src="/engineer.jpg" fill className='object-cover rounded-xl border-[10px] border-electric-blue' />
            </div>
            <div>
                <div className='absolute -top-8 -right-[25%] h-[200px] w-[200px]'>
                    <Image src="/wire-nice.jpg" fill className='object-cover rounded-full border-[10px] border-electric-blue' />
                </div>
                <div className='absolute -bottom-8 -left-[25%] h-[200px] w-[200px]'>
                    <Image src="/field.jpg" fill className='object-cover rounded-full border-[10px] border-electric-blue' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero