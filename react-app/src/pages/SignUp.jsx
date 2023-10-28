import React from 'react'
import Register from '../tries/SignupForm'
import deadseaone from '../assets/deadseaone.png'
import FormInput from '../tries/Registration'
import Signuptwo from '../tries/Signuptwo'
import RegisterForm from '../components/RegisterForm'

export const SignUp = () => {
  return (
    <>
    <div className='bg-{deadseaone}' >
    {/* <Register />
    <FormInput /> */}
    {/* <Signuptwo /> */}
    <RegisterForm />
    </div>
    </>
  )
}
