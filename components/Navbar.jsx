import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll/modules';

const Navbar = () => {    

  return (
    <div className="w-full">
        <div className="flex justify-between p-2 text-white items-baseline">
            <Link href='/'>
                <h1 className='text-4xl	font-bold'>F.</h1>
            </Link>
            <ul className='flex'>
                <li className='px-2 mx-2'>
                    <Link className='focus:outline-grey-400 cursor-pointer' to="about" spy={true} smooth={true} offset={0} duration={500}>About</Link>
                </li>
                <li className='px-2 mx-2'>
                    <Link className='focus:outline-grey-400 cursor-pointer' to="experience" spy={true} smooth={true} offset={0} duration={500}>Experience</Link>
                </li>
                <li className='px-2 mx-2'>
                    <Link className='focus:outline-grey-400 cursor-pointer' to="work" spy={true} smooth={true} offset={0} duration={500}>Work</Link>
                </li>
                <li className='px-2 mx-2'>
                    <Link className='focus:outline-grey-400 cursor-pointer' to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
                </li>
                <li className='px-2 mx-2'>
                <button className='text-white bg-[#6D748D] shadow-lg font-medium rounded-md text-sm px-2 py-1.5 mr-2 mb-2'>
            <span>
              CV 
            </span>
        </button>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar