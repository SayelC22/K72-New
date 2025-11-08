import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap, { ScrollTrigger } from 'gsap/all'

const Projects = () => {

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 0.4
      },
      scrollTrigger: {
        trigger: '.Parent',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })


  return (
    <div className='p-4'>
      <div className='pt-[40vh]'>
        <h2 className="font-[font2] text-[10vw] uppercase">Projects</h2>
      </div>
      <div className='-mt-5 Parent'>
        <div className='hero w-full h-[300px] flex gap-2 mb-4'><ProjectCard /></div>
        <div className='hero w-full h-[300px] flex gap-2 mb-4'><ProjectCard /></div>
        <div className='hero w-full h-[300px] flex gap-2 mb-4'><ProjectCard /></div>
      </div>
    </div>
  )
}

export default Projects