import React from 'react'
import Heading from '../common/Heading'
import { services } from '../data/dummydata'


function Service() {
  return (
   <>
    <section className='services'>
        <div className="container">
            <Heading title="Services"/>
            <div className="content grid3">
                {
                    services.map((items, i) =>(
                        <div className="box" data-aos="flip-left">
                            <i>{items.icon}</i>
                            <i>{items.title}</i>
                            <i>{items.desc}</i>

                        </div>
                    ))
                }
            </div>


        </div>
       
    </section>
   </>
  )
}

export default Service