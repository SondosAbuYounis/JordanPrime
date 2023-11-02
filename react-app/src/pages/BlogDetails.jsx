import React from 'react'
import deadseatwo from '../assets/deadseatwo.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from '../api/axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


// with link

export const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
          .then ((response)=>{
          setBlog(response.data);
        })
        .catch ((error) => {
          console.error("Error fetching data: ", error);
        });
    }, []);

  if (!blog) {
    return <div>Loading...</div>;
  }
  // const { id } = useParams();
  // const [card, setCard] = useState(
  //   {
  //     userId: '',
  //     id: '',
  //     title: '',
  //     body: '',
  //   }
  // );
  // const [loading, setLoading] = useState(true);

  // const data = useEffect(() => {
  //   async function fetchCardDetails() {
  //     try {
  //       const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  //       setCard(response.data);
  //       setLoading(false);
  //       console.log(card);
  //     } catch (error) {
  //       console.error('Error fetching card details:', error);
  //     }
  //   }

  //   fetchCardDetails();
  // }, [id]);

  // useEffect(() => {
  //   // Simulate fetching the card data with the specified ID
  //   const selectedCard = data.find(card => card.id === id);
  //   setCard(selectedCard);
  // }, [data, id]);

  // if (!card) {
  //   return <div>Loading...</div>;
  // }
    //   useEffect(() => {
    //     // Simulate fetching the card data with the specified ID
    //     const selectedCard = setData.find(card => card.id === id);
    //     setCard(selectedCard);
    //   }, [id]);
    //   if (!card) {
    //     return <div>Loading...</div>;
    //   }
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen'>
        <img src={deadseatwo} alt="" className='max-w-full max-h-full object-cover object-center w-[70rem] h-[30rem] item-center rounded-[2.5rem]'/>
        <p className='text-center text-4xl font-semibold pt-12'>{blog.title} {/*blog.blog_title*/}</p>
        <p  className='text-center text-sm font-base pb-12'>Write your own blog {/*blog.the_user*/} </p>
        <p className='text-center text-sm font-base pb-0'><FontAwesomeIcon icon="fa-solid fa-location-dot" style={{color: "#4c7581",}} />Place-location{/*blog.place_name*/}-{/*blog.place_location*/}  </p>
    </div>
    <div className='flex flex-col justify-center items-center'>
        <hr  class="object-start border-t border-1 border-dashed border-[#554D49] w-[70rem] mx-auto" ></hr>
        <p className='pt-12 pb-32'>{/*blog.blog_description*/}Here goes the blog </p>
    </div>
    </>
  
  )
}

// without anything 

// export const BlogDetails = () => {
//     const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState("");
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             // End Point
//             const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
//             setData(response.data);
//           } catch (error) {
//             console.error('Error', error);
//           }
//         };
    
//         fetchData();
//       }, []);
//       const currentItems = Array.isArray(data)

//   return (
//     <>
//     <div className=''>
//         <img src={deadseatwo} alt="" className='object-cover object-center w-[70rem] h-[30rem] item-center rounded-[2.5rem]'/>
//         <p  className='text-center text-4xl font-semibold pt-12'></p>
//         <p  className='text-center text-sm font-base pb-12'>Write your own blog  </p>
//         <p  className='text-center text-sm font-base pb-12'><FontAwesomeIcon icon="fa-solid fa-location-dot" style={{color: "#4c7581",}} />Write your own blog  </p>
//         <hr  class="object-start border-t border-1 border-dashed border-[#554D49]" ></hr>
//     </div>
//     </>
//   )
// }

// with axios 


// export const BlogDetails = () => {
//     const [data, setData] = useState([]);
//   const [currentPage, setCurrentPage] = useState("");
//     useEffect(() => {
//         const fetchData = async () => {
//           try {
//             // End Point
//             const response = await axios.get('https://jsonplaceholder.typicode.com/posts'); 
//             setData(response.data);
//           } catch (error) {
//             console.error('Error', error);
//           }
//         };
    
//         fetchData();
//       }, []);
//       const currentItems = Array.isArray(data)

//   return (
//     <>
//     {currentItems.map((item, userId) => (
//     <div className=''>
//         <img src={deadseatwo} alt="" className='object-cover object-center w-[70rem] h-[30rem] item-center rounded-[2.5rem]'/>
//         <p key={userId} className='text-center text-4xl font-semibold pt-12'>{item.title}</p>
//         <p key={userId} className='text-center text-sm font-base pb-12'>Write your own blog  </p>
//         <p key={userId} className='text-center text-sm font-base pb-12'><FontAwesomeIcon icon="fa-solid fa-location-dot" style={{color: "#4c7581",}} />Write your own blog  </p>
//         <hr key={userId} class="object-start border-t border-1 border-dashed border-[#554D49]" ></hr>
//     </div>
//      ))}
//     </>
//   )
// }
