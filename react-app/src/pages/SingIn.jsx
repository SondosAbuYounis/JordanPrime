import React, { useState } from 'react';
import deadseatwo from '../assets/deadseatwo.png'
import { Link } from 'react-router-dom';

const SingIn = () => {
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
        backgroundImage: `url(${deadseatwo})`,
        backgroundSize: 'cover',
        borderRadius: '2rem',
        
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

  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    // if (formData.password !== formData.password2) {
    //   alert('Passwords do not match');
    // } else {
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
    };
  // };

  return (
    <div style={FormDivStyle}>
    <form onSubmit={handleSubmit} style={FormStyle} >
    <div className="text-2xl pb-16 pt-4">SIGN IN</div>
      <div className='flex-center'>
        <label></label>
        <input
          type="text"
          name="username"
          style={inputBorderStyle}
          value={formData.username}
          onChange={handleChange}
          placeholder='Username'
        />
      </div>
      <div>
        <label></label>
        <input
          type="password"
          name="password"
          style={inputBorderStyle}
          placeholder='Password'
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <button type="submit"className=" px-3 pb-2 text-[#4C7581] bg-white border border-2 border-[#4C7581]  focus:outline-none hover:bg-[#4C7581] hover:text-[#FFFFFF] text-xs font-semibold rounded-lg text-xs px-5 py-2 mt-16 mb-8 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign In</button>

    </form>
    </div>
  );
};

export default SingIn;
