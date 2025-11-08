import React from 'react'
import firstProject from '../../assets/ProjectImages/PJC.jpg'
import secondProject from '../../assets/ProjectImages/WS.jpg'

const ProjectCard = () => {
  return (
            <>
              <div className='group relative w-1/2 h-full bg-green-800 rounded-none hover:rounded-4xl overflow-hidden transition-all'>
                <img className='h-full w-full obj-cover' src={firstProject} alt="" />
                <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 bg-black/10 h-full w-full flex items-center justify-center'>
                  <h2 className='uppercase text-3xl font-[font1] border-2 rounded-full p-2 text-white border-white'>Vior Le Projects</h2>
                </div>
              </div>
              <div className='group relative w-1/2 h-full bg-green-800 rounded-none hover:rounded-4xl overflow-hidden transition-all'>
                <img className='h-full w-full obj-cover' src={secondProject} alt="" />
                <div className='opacity-0 transition-all group-hover:opacity-100 absolute top-0 left-0 bg-black/10 h-full w-full flex items-center justify-center'>
                  <h2 className='uppercase text-3xl font-[font1] border-2 rounded-full p-2 text-white border-white'>Vior Le Projects</h2>
                </div>
              </div>
            </>
  )
}

export default ProjectCard