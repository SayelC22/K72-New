import React from 'react'
import heroVideo from '../../assets/HeroVideo.mp4'

const Video = () => {
  return (
    <div>
        <video className='h-full w-full obj-cover' autoPlay loop muted src={heroVideo}></video>
    </div>
  )
}

export default Video