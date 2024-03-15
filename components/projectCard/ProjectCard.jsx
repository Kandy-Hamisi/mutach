import Image from 'next/image'
import React from 'react'

const ProjectCard = ({ image, title, category }) => {
  return (
    <div className='relative shadow-3xl'>
        <div className='relative h-[400px] w-[400px]'>
            <Image src={image} alt={title} className='object-cover' fill />
        </div>
        <div className='absolute bottom-0 bg-white w-full flex items-center justify-between'>
            <div>
                <h1>{title}</h1>
                <p>{category}</p>
            </div>
            <div className='bg-safety-yellow p-2'>
                <Image src='/arrow-right.png' height={50} width={50} className='objec-contain' />
            </div>
        </div>
    </div>
  )
}

export default ProjectCard