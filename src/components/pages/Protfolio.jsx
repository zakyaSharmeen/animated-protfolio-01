import React, { useState } from 'react'
import {portfolio} from "../data/dummydata"
import { Visibility } from '@mui/icons-material'
const allCategory =["all", ...new Set(portfolio.map((item) => (item.category)))]

function Protfolio() {

    // from dummydata se aya hai
    const [list, setList] = useState(portfolio)

    // from dummydata one by one
    const [category, setCategory] = useState(allCategory)


    // filter
    const filterItems = (category) =>{
        const newItems = portfolio.filter((item) => item.category === category)
        setList(newItems)

        if (category === "all"){
            setList(portfolio)
        }
    }

  return (
    <>
    <article>
        <div className="container">
            <div className="catButton">
                {category.map((category) => (
                    <button className='primartBtn' onClick={() => filterItems(category)} data-aos="zoom-out-down">{category}</button>
                ))}

            </div>
        </div>

        <div className="content grid3">
           {
            list.map((items) =>(
                <div className="box" data-aos="fade-up">
                    <div className="img">
                        <img src={items.cover} alt="" />
                    </div>

                    <div className="overlay">
                        <h3>{items.title}</h3>
                        <span>{items.name}</span>
                        <Visibility/>

                    </div>
                </div>
            ))

           }

        </div>
    </article>
    </>
  )
}

export default Protfolio  