import React from 'react'
import {project} from "../data/dummydata"
import CountUp  from "react-countup";

function Counter() {
  return (
    <>
    <div className="hero counter">
        <div className="container grid3 grid4">
            {project.map((item, i) =>(
                <div className="box" data-aos="zoom-in">
                    <i>{item.icon}</i>
                    <h1 className='heading'>
                        <CountUp enableScrollSpy duration={2} end= {item.num}/>
                    </h1>
                    <p>{item.title}</p>
                </div>
            )

            )}
        </div>
    </div>
    </>
  )
}

export default Counter