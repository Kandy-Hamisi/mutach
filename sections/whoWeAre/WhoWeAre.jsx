import { TaskCard } from '@/components'
import { tasks } from '@/constants'
import React from 'react'

const WhoWeAre = () => {
  return (
    <section className='max-container'>
        <div className='flex justify-center'>
            <h1 className='text-4xl font-bold font-montserrat'>We Are Mutach Tech</h1>
        </div>

        <div className='flex justify-center mt-4'>
            <p className='text-steel-gray max-w-[700px] text-center leading-[32px]'>Mutach-Tech Ltd has been in existence for the last 7 years and was registered as a Limited Company in Kenya in 2020. We are a team of engineers offering solutions to the Building and Construction Industry offering. Our Vision is to be Africa’s Leading Technological Company offering the most robust, cost-effective, high-quality, clean and reliable Electrical systems for Power Supply, Power Reticulation, Power Management and Installation by giving Value for Money to our clients</p>
        </div>

        <div className='mt-8 flex justify-center gap-12'>
          {
            tasks.map((task) => (
              <TaskCard textContent={task.taskTitle} key={task.id} image={task.photo} />
            ))
          }
        </div>

    </section>
  )
}

export default WhoWeAre