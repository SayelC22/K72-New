import React from 'react'
import Video from './Video'


const HomeHeroText = () => {
  return (
    <div className='font-[font1] pt-5 text-center'>
        <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex itme-center'>L'étincelle</div>
        <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex itme-start'>qui<div className='h-[8vw] w-[20vw] rounded-full overflow-hidden -mt-2'><Video/></div>génère</div>
        <div className='text-[9.5vw] uppercase leading-[8vw] justify-center flex itme-center'>la créativité</div>
    </div>
  )
}

export default HomeHeroText