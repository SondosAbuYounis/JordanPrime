import React from 'react'
import deadseaone from '../assets/deadseaone.png'
import deadseatwo from '../assets/deadseatwo.png'
import petra from '../assets/petra.jpg'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
  <>
      {/* Hero Section */}
      <div className='relative grid grid-rows-2 grid-flow-col gap-y-12 gap-x-12 mt-12 mb-4 justify-center align-center'>
        <img src={petra} className='object-cover w-[40rem] h-[33rem] row-span-3 rounded-[2.5rem]'/>
        <img src={deadseaone} className='object-cover w-[31rem] h-[15rem] col-span-2 rounded-[2.5rem]'/>
        <img src={deadseatwo} className='object-cover w-[31rem] h-[15rem] row-span-2 col-span-2 rounded-[2.5rem]'/>
        
        <div class="absolute md:inset-[11rem] sm:inset-[0.25rem] sm:top-[9rem] md:top-[12rem]  text-center text-white bg-black bg-opacity-50 bg-cover h-56 ">
          <p class="drop-shadow-[0px_10px_8px_rgba(0,0,0,0)] text-5xl pt-8 pb-4">Jordan Prime</p>
          <p class=" drop-shadow-lg text-s font-extralight">Been to Jordan before !! Join us and share what you explored with the world !!
          Share your blog and explore others’ 
          </p>              
          <ul className='flex flex-row justify-center pt-2'>
          <li className=' mb-2 mt-6 mr-4'>
                <Link to="/signin" className=" drop-shadow-lg px-3 pb-2 text-[#ffffff]  border border-2 border-[#ffffff]  focus:outline-none hover:bg-[#ffffff] hover:text-[#554D49] text-xs font-semibold rounded-lg text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">SIGN IN</Link>
            </li>
            <li className=' mb-2 mt-6'>
                <Link to="/signup" className=" drop-shadow-lg bg-[#554D49] px-3 pb-2 text-[#ffffff]  border border-2 border-[#554D49]  focus:outline-none hover:bg-[#ffffff] hover:border-[#ffffff] hover:text-[#554D49] text-xs font-semibold rounded-lg text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">SIGN UP</Link>
            </li>
          </ul>
        </div>
      </div>   
  </>
  )
}
