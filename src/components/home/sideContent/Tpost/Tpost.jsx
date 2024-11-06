import React from "react"
import { tpost } from "../../../../dummyData"
import Heading from "../../../common/heading/Heading"
import "./tpost.css"

const Tpost = () => {
  return (
    <>
      <section className='tpost'>
        <Heading title='หมูกินหมู' />
        {tpost.map((val) => {
          return (
            <div className='box flexSB'>
              <div className='img'>
                <img src={val.cover} alt='' />
              </div>
              <div className='text'>
                <h1 className='title'>{val.title}</h1>
              </div>
            </div>
            
          )
        })}
        <div>
        <h1>หลังจากนั้นกินไม่พักเบยยย อ้วนจะตุยยล้าาาา</h1>
        </div>
      </section>
    </>
  )
}

export default Tpost
