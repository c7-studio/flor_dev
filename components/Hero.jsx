import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { useRouter } from 'next/router'

function Hero() {
  const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center h-screen mx-auto'>
      <div className='p-5 mt-1 max-w-[1200px] mx-auto'>
        <p className='text-xs text-white'>Hello, my name is</p>
        <h1 className='text-7xl text-white font-bold'>Florencia Gomez.</h1>
        <h2 className='text-7xl text-[#6D748D] font-bold'>I build things for Android.</h2>
        <p className='text-md text-white mt-4'>I’m an Android developer specialized in building exceptional digital experiences.</p>
        <p className='text-md text-white'>At the moment I'm interested in learning more about Kotlin. </p>
    <div className='flex mt-4'>
        <button className='text-white bg-[#6D748D] shadow-lg font-medium rounded-md text-sm px-5 py-2.5 mr-2 mb-2 inline-flex' 
        onClick={() => router.push('/#experience', undefined, {scroll: false})}>
            <span>See my portfolio</span>
            <MdKeyboardArrowDown size={20} className='ml-1' />
        </button>
      </div>
    </div>
  </div>
  )
}

export default Hero