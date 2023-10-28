// import React from 'react'
// import { Link } from 'react-router-dom'
// import deadseaone from '../assets/deadseaone.png'

// export const CardsDisplay = () => {
//   return (
//     <>
//     <p className='text-center text-4xl font-semibold pt-12 pb-12'>The blogs</p>
//     <div className='flex flex-wrap justify-around gap-y-4 pb-16'>  
//       <div class="mb-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
//           <a href="#">
//               <img className="rounded-t-lg object-cover w-[50rem] h-[10rem]" src={deadseaone} alt="" />
//           </a>
//           <div class="p-5">
//               <a href="#">
//                   <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
//               </a>
//               <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
//           </div>
//       </div>
//     </div>    
//     </>
//   )
// }
//////////////////////
import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './App.css'; 
import deadseaone from '../assets/deadseaone.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const CardsDisplay = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // End Point
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
        setData(response.data);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchData();
  }, []);

  const currentItems = Array.isArray(data)
    ? data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : [];

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <p className='text-center text-4xl font-semibold pt-12 mt-12 pb-12'>The blogs</p>

        <div className='flex flex-wrap justify-around gap-y-4 gap-x-4 pb-16 mt-24'>  
        {currentItems.map((card, userId) => (
            <div class="mb-12 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link to={`/card/${card.id}`}>
                    <img key={userId} className="rounded-t-lg object-cover w-[50rem] h-[12rem] hover:opacity-75" src={deadseaone} alt="blog-image" />{/* blog.image */}
                </Link>
                <div class="p-5">
                <Link to={`/card/${card.id}`} > 
                      <h5 key={userId} class="hover:text-[#4C7581] mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{card.title}{/*blog.blog_title*/}</h5>
                </Link>
                    <p key={userId} class="mb-3 font-normal text-gray-700 dark:text-gray-400">{card.body}{/*blog.blog_description*/}</p>
                </div>
            </div>    
        ))}
      </div>
  
      <ul className="pagination" class='list-none flex justify-center pb-24 '>
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, i) => (
          <li

            key={i}
            className={i + 1 === currentPage ? 'active bg-[#4C7581] text-[#ffffff]' : ''}
            onClick={() =>{ 
              paginate(i + 1);
            }}
            class={`${
              i + 1 === currentPage ? 'w-8 h-8 border rounded-full bg-[#4C7581] text-[#ffffff] shadow  text-center p-1 m-1' : 'w-8 h-8 border rounded-full bg-[#ffffff] hover:bg-[#4C7581] hover:text-[#ffffff] shadow text-[#4C7581] text-center p-1 m-1' }`}
          >
            {i + 1}
          </li>
        ))}
      </ul>
    </div>
  );
  }

export default CardsDisplay;
