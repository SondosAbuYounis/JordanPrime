import React, { useState } from 'react';
import deadseaone from '../assets/deadseaone.png'

export const BlogForm = () => {
    // Input border style 
    const inputBorderStyle = {
        background: '',
        border:'none',
        borderBottom: '1px solid #4C7581'
    }
    // Form div style 
    const FormDivStyle = {
        margin : '5rem',
        marginLeft : '5rem',
        margin : '5rem',
        padding : '5rem',
        display: 'flex',
        flexDirection: 'column',
        backgroundPosition: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundSize: 'cover',
        borderRadius: '2rem',
        backgroundImage: `url(${deadseaone})`,
        
    }
    // Form style 
    const FormStyle = {
        margin : '3rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        padding: '2rem',
        width: '30rem',
        borderRadius:'2rem',
    }
    // Description Style
    const descriptionStyle= {
        backgroundColor: '#EBE9E9',
        width: '19rem',
        height: '14rem',
        margin: '2rem',
        border: '1px solid #4C7581',
        borderRadius: '1rem', 
        textAlign: 'start',
     }
    // File Input 
    const fileInputStyle ={
        justifySelf: 'center',
        padding:'0',
    }
    // Functionality
    const [formData, setFormData] = useState({
        blog_title: '',
        blog_description:'',
        the_user: '',
        image: '',
        place_name:'',
        place_location:'',

      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        // You should perform validation here and send the data to the backend endpoint.
        // Implement validation and API call logic according to your backend.
    
        // Example validation (you should replace this with your own logic):
        if (formData.password !== formData.password2) {
          alert('Passwords do not match');
        } else {
          // Endpoint
          fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          })
            .then((response) => response.json())
            .then((data) => {
              // Handle the response from the backend here
              console.log(data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
        }
      };
    
  return (
    <form>
      <div>
        <div style={FormDivStyle}>
          <form onSubmit={handleSubmit} style={FormStyle}>
            <div className="text-2xl pb-16 pt-4">Publish a blog</div>
            <div className="flex-center">
              <label></label>
              <input
                type="text"
                name="blog_title"
                style={inputBorderStyle}
                value={formData.blog_title}
                placeholder="Blog Tilte"
                className='w-[19rem]'
                onChange={handleChange}
              />
            </div>
            <div>
              <label></label>
              <input
                type="text"
                name="the_user"
                style={inputBorderStyle}
                placeholder="Place Name"
                value={formData.the_user}
                className='w-[19rem]'
                onChange={handleChange}
              />
            </div>
            <div>
              <label></label>
              <input
                type="text"
                name="place_name"
                style={inputBorderStyle}
                placeholder="Site Name"
                value={formData.place_name}
                className='w-[19rem]'
                onChange={handleChange}
              />
            </div>
            <div>
              <label></label>
              <input
                type="text"
                name="place_location"
                style={inputBorderStyle}
                placeholder="Site Location"
                value={formData.place_location}
                className='w-[19rem]'
                onChange={handleChange}
              />
            </div>
            <div>
              <label></label>
              <input
                type="text"
                name="blog_description"
                style={descriptionStyle}
                placeholder="Write your blog here ..."
                value={formData.blog_description}
                className='w-[19rem] '
                onChange={handleChange}
              />
            </div>
            <div>
              <label></label>
              <input
                type="file"
                name="image"
                style={fileInputStyle}
                placeholder="Upload an image"
                value={formData.image}
              />
            </div>

            <button
              type="submit"
              className=" px-3 pb-2 text-[#4C7581] bg-white border border-2 border-[#4C7581]  focus:outline-none hover:bg-[#4C7581] hover:text-[#FFFFFF] text-xs font-semibold rounded-lg text-xs px-5 py-2 mt-16 mb-8 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Publish Blog
            </button>
 
          </form>
        </div>
      </div>
    </form>
  );
};


