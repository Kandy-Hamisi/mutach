import { services } from '@/constants'
import Image from 'next/image'
import React from 'react'

const OurServices = () => {
  return (
    <section className='max-container'>
        <div className='flex justify-center'>
            <h1 className='font-montserrat font-bold text-4xl'>We Offer</h1>
        </div>
        <div className='mt-4 flex justify-center'>
            <p className='tacking-32'>We offer a comprehensive range of cost effective services for residential and commercial properties</p>
        </div>
        
        <div className='flex gap-12 items-center justify-between mt-8'>
            {
                services.map((service) => (
                    <div key={service.id} className='flex flex-col space-y-4 items-center'>
                        <div>
                            <Image src={service.icon} alt={service.title} className='object-contain' height={50} width={50} />
                        </div>
                        <div>
                            <h3 className='font-bold font-montserrat'>{service.title}</h3>
                        </div>
                        <div>
                            <p className='text-center text-graphite'>{service.textContent}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default OurServices