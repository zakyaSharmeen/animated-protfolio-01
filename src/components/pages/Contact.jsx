import React from 'react'
import Heading from "../common/Heading"
import {contact} from "../data/dummydata"

function Contact() {
  return (
    <>
    <div className="contact">
        <div className="container">
            <Heading title="Keep In Touch"/>
            <div className="content flexsb">
                <div className="right">
                    <form action="">
                        <div className="flex">
                            <input type="text"  placeholder='Nme'/>
                            <input type="text"  placeholder='Email'/>


                        </div>
                        <input type="submit"  placeholder='subject'/>
                        <textarea name="" id="" cols='30' rows="10"></textarea>
                        <button>SUBMIT</button>

                    </form>
                </div>

                <div className="left">
                    {contact.map((item) =>(
                        <div className="box">
                            <i>{item.icon}</i>
                            <p>{item.text1}</p>
                            <p>{item.text2}</p>
                        </div>
                    ))}
                </div>
            </div>

            
        </div>
    </div>
    </>
  )
}

export default Contact