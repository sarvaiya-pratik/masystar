import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import img1 from "../asset/3.jpg"
import img2 from "../asset/4.jpg"

const Services = () => {
  return (
   <div className="services">
    <Carousel infiniteLoop autoPlay showStatus={false} showThumbs={false} interval={2000}>

        <div>
            <img src={img1} alt="" />
            <p className='legend'>Full Stack</p>
        </div>
        <div>
            <img src={img2} alt="" />
            <p className='legend'>Full Supprt</p>
        </div>

    </Carousel>
   </div>
  )
}

export default Services
