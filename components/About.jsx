import Image from 'next/image'
import React from 'react'


function About() {
  return (
    <div className='flex flex-col items-center justify-center h-screen max-w-[1200px] mx-auto md:flex-row md:p-20' id="about">
      <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start text-left items-center md:ml-6">
      <div className='inline-flex items-center'>
        <h2 className='text-2xl text-white font-semibold'>01. About</h2>
        <hr className='w-56	ml-4 border-[0.5px] border-white'/>
      </div>
      <div>
        <p className='text-sm text-white mx-auto'>
        Hello! Im "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. 
        </p>
      </div>
      </div>
      <div class="lg:max-w-lg lg:w-full mb-10 md:mb-0 md:ml-6">
        <Image class="object-cover object-center" alt="about" src="/1-about.png" width={300} height={300}/>
    </div>

    </div>
  )
}

export default About