import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex flex-row justify-around'>
        <ul className='flex flex-row pt-8'>
            <li className='list-none' >
            <Link to="/" className=' hover:text-[#4C7581] px-3 pb-2  text-xs font-semibold'>HOME</Link>
            </li>
            <li className='' >
            <Link to="/" className=' hover:text-[#4C7581] px-3 pb-2 text-xs font-semibold'>ABOUT US</Link>
            </li>
            <li className='' >
            <Link to="/" className=' hover:text-[#4C7581] px-3 pb-2 text-xs font-semibold'>CONTACT US</Link>
            </li>
        </ul>
        <img src={logo} className='px-3 pb-2 mt-6 h-14'/>
        <ul className='flex flex-row pt-2'>
        <li className=' mb-2 mt-6'>
                <Link to="/signin" className=" px-3 pb-2 text-[#000000] bg-white focus:outline-none  hover:border hover:border-2 hover:border-[#4C7581]  hover:text-[#4C7581] px-3 pb-2 text-xs font-semibold">SIGN IN</Link>
            </li>
            <li className=' mb-2 mt-6'>
                <Link to="/signup" className=" px-3 pb-2 text-[#4C7581] bg-white border border-2 border-[#4C7581]  focus:outline-none hover:bg-[#4C7581] hover:text-[#FFFFFF] text-xs font-semibold rounded-lg text-xs px-5 py-2  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">SIGN UP</Link>
            </li>
           
        </ul>
    </div>
  )
}
