import React from 'react'
import video from "../../assets/videos/hero.mp4"

const Hero = () => {
  return (
    <div className="relative w-auto h-auto">
    <video
      autoPlay
      muted
      loop
      className="object-cover w-full h-full lg:h-screen"
    >
      <source src={video} type="video/mp4" />
    </video>
    </div>
  )
}

export default Hero