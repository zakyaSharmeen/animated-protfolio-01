import React from 'react'
import {home} from "../data/dummydata"
import Typewriter from 'typewriter-effect'

function Hero() {
  return (
    <>
    <section className="hero">
        {home.map((val, i) =>(
            <div className="heroContainer">
                <h3  data-aos="fade-right">{val.text}</h3>
                <h1>
                    <Typewriter options={{ strings: [`${val.name}`,
                        `${val.post}`,
                        `${val.design}`
                    ],
                    autoStart: true,
                    loop: true,
                    }}/>
                 
                
                </h1>
                <p  data-aos="fade-left">{val.desc}</p>
                <button data-aos="fade-up-right" className='primaryBtn'>Download Cv</button>
            </div>
        ))}
    </section>
    </>
  )
}

export default Hero