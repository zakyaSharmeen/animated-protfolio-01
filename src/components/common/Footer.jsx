import React from 'react'
import {social} from "../data/dummydata"

function Footer() {

  return (
    <>
        <footer>
            {social.map((item) =>(
                <>
                <i>{item.icon}</i>
                </>
            ))}
            <p>All rights Reserved</p>
        </footer>
    </>
  )
}

export default Footer