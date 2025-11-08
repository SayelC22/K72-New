import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

import Carl from '../assets/Team/Carl_480x640.jpg'
import Camille from '../assets/Team/CAMILLE_480X640_2.jpg'
import Chantal from '../assets/Team/ChantalG_480x640.jpg'
import Joseph from '../assets/Team/HugoJoseph_480x640.jpg'
import Joel from '../assets/Team/joel_480X640_3.jpg'
import Lawrence from '../assets/Team/Lawrence_480x640.jpg'
import Meggie from '../assets/Team/MEGGIE_480X640_2.jpg'
import Mel from '../assets/Team/MEL_480X640.jpg'
import Michele from '../assets/Team/Michele_480X640.jpg'
import Olivier from '../assets/Team/Olivier_480x640.jpg'
import Sophie from '../assets/Team/SophieA_480x640.jpg'

const Agence = () => {

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)
  const imageArray = [
    Carl,
    Camille,
    Chantal,
    Joseph,
    Lawrence,
    Meggie,
    Mel,
    Michele,
    Olivier,
    Sophie,
    Joel
  ]

  console.log(imageArray)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function(){
    gsap.to(imageDivRef.current,{
      scrollTrigger:{
        trigger:imageDivRef.current,
        // markers:true,
        start:'top 14%',
        end: 'top -170%',
        scrub:1,
        pin:true,
        pinSpacing: true,
        pinType: 'transform',
        anticipatePin:1,
        invalidateOnRefresh:true,
        onUpdate:function(elem){
          let imageIndex
          if(elem.progress<1){
            imageIndex = Math.floor(elem.progress * imageArray.length)
          }else{
            imageIndex = imageArray.length - 1
          }
          
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })

  return (
    <div>
      <div className='section1'>
      <div ref={imageDivRef} className='h-50 w-40 absolute rounded-4xl top-20 left-85 overflow-hidden'>
        <img ref={imageRef} className='h-full w-full obj-cover' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
      <div className='relative font-[font2] text-[#111]'>
      <div className='mt-[40vh]'>
        <h1 className='text-[18vw] uppercase leading-[18vw] text-center'>Soixan7e<br/>Douze</h1>
      </div>
      <div className='pl-[40%] mt-15'>
        <p className='text-5xl'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
      </div>
    </div>
    </div>
    <div className="section2 h-screen"></div>
    </div>

  )
}

export default Agence