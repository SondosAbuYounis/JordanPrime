import React from 'react'
import { Hero } from '../components/Hero'
import { WriteABlog } from '../components/WriteABlog'
import CardsDisplay from '../components/CardsDisplay'
import { BlogForm } from '../components/BlogForm'
import Register from '../tries/SignupForm'

export const Home = () => {
  return (
    <>
    <Hero />
    <WriteABlog />
    <CardsDisplay />    
    {/* <Register /> */}
    </>
  )
}
