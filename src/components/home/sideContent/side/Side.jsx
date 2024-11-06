import React from "react"
import "./side.css"
import Slider from "react-slick"
import Heading from "../../../common/heading/Heading"
import { gallery } from "../../../../dummyData"
import Tpost from "../Tpost/Tpost"
import SocialMedia from "../social/SocialMedia"

//const allCat = [...new Set(popular.map((curEle) => curEle.catgeory))]
//console.log(allCat)

const Side = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const catgeory = ["world", "travel", "sport", "fun", "health", "fashion", "business", "technology"]
  return (
    <>
      <Heading title='คำบอกก่อนนอน' />
      <SocialMedia />

      <section className='subscribe'>
        <h1 className='title'>วันครบรอบเราวันที่เท่าไร</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const answer = e.target.elements[0].value; // Gets the input value
            if (answer === "5 พฤศจิกายน 2566") {
              alert("ถูกต้องจ้าาาาาา");
            } else {
              alert("ตอบผิดได้ไงงงงง เดะตีตายเลยยย ห่วยยยย");
            }
          }}
        >
          <input type='text' placeholder='ตอบดีๆๆนะจ่ะ...' />
          <button type='submit'>
            <i className='fa fa-paper-plane'></i> SUBMIT
          </button>
        </form>
      </section>
      <Tpost />

    </>
  )
}

export default Side
