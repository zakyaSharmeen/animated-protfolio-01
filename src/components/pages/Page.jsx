import React from 'react'
import Header from '../common/Header'
import Home from '../home/Home';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './About';
import Service from '../home/Service';
import Protfolio from './Protfolio';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Contact from './Contact';
import Footer from '../common/Footer';


function Page() {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/services" element={<Service />} />
            <Route exact path="/portfolio" element={<Protfolio />} />
            <Route exact path="/testimonials" element={<Testimonials />} />
            <Route exact path="/blog" element={<Blog />} />
            <Route exact path="/contact" element={<Contact />} />






       </Routes>
       <Footer/>
   </Router>

    </>
  )
}

export default Page