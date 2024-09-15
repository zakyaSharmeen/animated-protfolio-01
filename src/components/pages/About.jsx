import React from 'react'
import {about} from "../data/dummydata"
import Heading from '../common/Heading'

function About() {
  return (
   <>
    <section className="about">
        <div className="container flex">
            {about.map((val, i) =>(
                <>
                <div className="left">
                    <img src={val.cover} alt="images" data-aos="fade-down-right"/>
                </div>
                <div className="right" data-aos="fade-down-left">
                    <Heading title= "About Me"/>
                    <p>{val.desc}</p>
                    <p>{val.desc1}</p>
                    <button>Download CV</button>
                    <button className='primaryBtn'>Download CV</button>



                </div>
                </>


            ))}
        </div>
        
    </section>
   </>
  )
}

export default About