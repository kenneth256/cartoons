import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
    <div className='grid grid-cols-2 h-[50vh] bg-gray-800 text-white'>
      <div className='flex items-center justify-center'>
        <p className='font-extrabold'>Welcome world class animes</p>
      </div>
      <div className='h-[40vh] my-auto rounded-md'>
        <Image
          src='./image.jpeg' 
          alt='alt-image' 
          className='w-full h-full object-contain'
        />
      </div>
    </div>
  )
}

export default Hero
