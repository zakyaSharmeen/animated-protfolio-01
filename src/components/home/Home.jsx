import React from 'react'
import Hero from './Hero'
import About from "../pages/About"
import Service from './Service'
import Counter from '../pages/Counter'
import Protfolio from '../pages/Protfolio'
import Testimonials from '../pages/Testimonials'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Service/>
      <Counter/>
      <Protfolio/>
      <Testimonials/>
      <Blog/>
      <Contact/>
      
    </div>
  )
}

export default Home