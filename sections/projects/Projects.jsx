import { ProjectBtn, ProjectCard } from '@/components'
import { projectButtons, projects } from '@/constants'
import React from 'react'

const Projects = () => {
  return (
    <section className='max-container'>
        <div className='flex flex-col items-center space-y-6'>
            <h4 className='uppercase'>Projects</h4>
            <h1 className='font-bold font-montserrat text-4xl capitalize'>latest Completed Projects</h1>
        </div>

        <div className='mt-8 flex justify-center gap-12 items-center'>
            {
                projectButtons.map((button) => (
                    <ProjectBtn key={button.id} textContent={button.btnTitle} />
                ))
            }
        </div>

        <div className='mt-8 flex justify-center flex-wrap gap-10'>
            {
                projects.map((project) => (
                    <ProjectCard key={project.id} { ...project } />
                ))
            }
        </div>
    </section>
  )
}

export default Projects