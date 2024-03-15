import Image from 'next/image'
import React from 'react'

const TaskCard = ({ textContent, image }) => {
  return (
    <div className='bg-white relative cursor-pointer'>
        <div className='relative h-[300px] w-[300px]'>
            <Image src={image} alt={textContent} className='object-cover rounded-md' fill/>
        </div>
        <div className='linear-gradient rounded-b-md absolute bottom-0 p-3 w-full flex justify-center'>
            <h5 className='text-white font-bold font-montserrat text-2xl'>{textContent}</h5>
        </div>
    </div>
  )
}

export default TaskCard