import React from 'react'

    const ProjectBtn = ({ textContent }) => {
  return (
    <button className='p-2 bg-safety-yellow border-2 border-safety-yellow hover:bg-transparent transition-colors duration-300'>
        {textContent}
    </button>
  )
}

export default ProjectBtn