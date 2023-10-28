import React, { useState } from 'react';
import deadseatwo from '../assets/deadseatwo.png'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Await } from 'react-router-dom';

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
        // Error messages 
        const erroMessage = {
          fontSize: '0.65rem',
          padding: '0.5rem',
          color: '#FF0000',
          maxWidth: '15rem',
          textAlign: 'start',
      }
        // Invalid Credintials 
        const invalidCredintials = {
          fontSize: '1rem',
          padding: '0.5rem',
          color: '#FF0000',
          maxWidth: '20rem',
          textAlign: 'start',
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
  const [error, setError] = useState('');
  // const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // // Email Validation 
    // const validateEmail = (email) => {
    //   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    //   return emailRegex.test(email);
    //   };
    //   const isValid = validateEmail(formData.email);
    //   setIsEmailValid(isValid);


      // UserName Validation 
      const validateUserName = (username) => {
      const nameRegex = /^[a-zA-Z0-9]{3,6}$/;
      return nameRegex.test(username);
      };
      const nameIsValid = validateUserName(formData.username);
      setIsNameValid(nameIsValid);
      

      // Password validation
      const validatePassword = (password) => {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/;
      return passwordRegex.test(password);
      };
      const validPassword = validatePassword(formData.password);
      setIsPasswordValid(validPassword);

      

    // Send the form data to the server for authentication
    axios.post('/api/login', formData)
      .then((response) => {
        window.location.href = '/';
        // history.push('/');
      })
      .catch((error) => {
        setError('Invalid credentials. Please try again.');
      });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  // Validation password and email must be filled
  //   if (!formData.username || !formData.password) {
  //     setError('Please enter both username and password');
  //     return;
  //   }
  //   // Sending the data to the back 
  //   try {
  //     const response = await fetch('https://your-backend-api-endpoint.com/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //     } else {
  //       setError('Login failed. Please check your credentials.');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
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
      {!isNameValid && (
      <p style={erroMessage}>Please enter a valid user name</p>
      )}
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
      {!isPasswordValid && (
      <p style={erroMessage}>Please enter a valid password</p>
      )}
      <button type="submit"className=" px-3 pb-2 text-[#4C7581] bg-white border border-2 border-[#4C7581]  focus:outline-none hover:bg-[#4C7581] hover:text-[#FFFFFF] text-xs font-semibold rounded-lg text-xs px-5 py-2 mt-16 mb-8 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign In</button>
      {error && <div style={invalidCredintials}>{error}</div>}
    </form>
   
    </div>
  );
};

export default SingIn;
