import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font2] flex items-center justify-center gap-2'>
        <div className='hover:border-[#D3FD50] hover:text-[#D3FD50]'>
        <Link className='text-[3.8vw] uppercase border-5  px-4 pt-1 pb-0 rounded-full' to='/projects'>Projects</Link>
        </div>
        <div className='hover:border-[#D3FD50] hover:text-[#D3FD50]'>
        <Link className='text-[3.8vw] uppercase border-5 px-4 pt-1 pb-0 rounded-full' to='/agence'>Agence</Link>
        </div>
    </div>
  )
}

export default HomeBottomText