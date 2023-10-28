import React from 'react'
import Addbutton from '../assets/Addbutton.svg'
import { Link } from 'react-router-dom'

export const WriteABlog = () => {
  return (
    <>
    <hr class="object-start border-t border-1 border-dashed border-[#554D49]" ></hr>
    <p className='text-center text-4xl font-semibold pt-12'>Write your own blog  </p>
    <div className='flex flex-row justify-center drop-shadow-2xl'>
        <div className='shadow flex flex-row justify-center items-center w-[70rem] h-[5rem]  rounded-[2.5rem] bg-[#fffffff] border my-16'>
            <div className='flex flex-row gap-4 justify-center text-center border bg-[#D9D9D9] bg-opacity-25 text-[#554D49] w-[17rem] h-[2.5rem] p-2 rounded-[2.5rem]'>
                <img src={Addbutton} alt="" path='/' />
                <p> <Link to='/blogform' className='hover:text-[#4C7581]' >Write your own blog ..</Link></p>
            </div>
        </div>
    </div>
    <hr class="object-start border-t border-1 border-dashed border-[#554D49]" ></hr>

    </>
  )
}
