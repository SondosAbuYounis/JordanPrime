import React, { useState } from 'react';
import deadseatwo from '../assets/deadseatwo.png'
import { Link } from 'react-router-dom';

const SignUpForm = () => {
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

  const [formData, setFormData] = useState({
    username: '',
    email:'',
    password: '',
    // password2: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  



  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isNameValid, setIsNameValid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Password validation
    const validatePassword = (password) => {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$/;
      return passwordRegex.test(password);
    };
    // Email Validation 
    const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
    };
    const isValid = validateEmail(formData.email);
    setIsEmailValid(isValid);
    // UserName Validation 
    const validateUserName = (username) => {
    const nameRegex = /^[a-zA-Z0-9]{3,6}$/;
    return nameRegex.test(username);
    };
    const nameIsValid = validateUserName(formData.username);
    setIsNameValid(nameIsValid);

    const isPasswordValid = validatePassword(formData.password);
    if (!isPasswordValid) {
      setIsPasswordValid(false);
    // } else // Password match Validation
    // if (formData.password !== formData.password2) {
    //   const matchPass = document.getElementById("form");
    //   const isMatchPass = document.createElement("span");
    //   // styling the error message 
    //   isMatchPass.style.color = "red";
    //   isMatchPass.style.fontSize = '0.65rem';
    //   isMatchPass.textContent = "Passwords don't match";
    //   matchPass.appendChild(isMatchPass)
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
    }


  //   if (validForm) {
  //     try {
  //       const response = await axios.post(
  //         "http://",
  //         formData
  //       );
  //     } catch (error) {
  //       console.log("Error:, error");
  //     }
  //   }
  }

  return (
    <div style={FormDivStyle} >
    <form onSubmit={handleSubmit} style={FormStyle} >
    <div className="text-2xl pb-16 pt-4">SIGN UP</div>
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
      <p style={erroMessage}>Username should be 3-6 characters without any special characters</p>
      )}
      <div>
        <label></label>
        <input
          type="email"
          name="email"
          style={inputBorderStyle}
          placeholder='Email'
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      {!isEmailValid && (
      <span style={erroMessage}>please enter a valid email address </span>
       )} 
      {/* REGEX  */}
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
        <span style={erroMessage}>Password should be 8-20 characters with at least 1 letter, 1 number and 1 special character</span>
      )}
      {/* REGEX ^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,20}$ */}
      {/* <div id="form">
        <div>
        <label></label>
        <input
          type="password"
          name="password2"
          style={inputBorderStyle}
          placeholder='Confirm Password'
          value={formData.password2}
          onChange={handleChange}
        />
        </div>
      </div> */}
      {/* <span style={erroMessage}>Passwords don't match</span> */}
      {/* REGEX ^[A-Za-z0-9+_.-]+@(.+)$ */}
      <button type="submit"className=" px-3 pb-2 text-[#4C7581] bg-white border border-2 border-[#4C7581]  focus:outline-none hover:bg-[#4C7581] hover:text-[#FFFFFF] text-xs font-semibold rounded-lg text-xs px-5 py-2 mt-16 mb-8 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Sign Up</button>
        <div className='text-[0.75rem] mb-1'>Already have an account ? <Link to='/signin' className='hover:text-[#4C7581] underline decoration-solid'>Sing In</Link></div>
    </form>
    </div>
  );
};

export default SignUpForm;
