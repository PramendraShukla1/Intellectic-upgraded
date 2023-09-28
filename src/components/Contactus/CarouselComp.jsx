import React from 'react'
import { Carousel } from "@material-tailwind/react";
import contact1 from "../../assets/contact1.png"
import contact2 from "../../assets/contact2.png"
import contact3 from "../../assets/contact3.png"


const CarouselComp = () => {
  return (
    <div className='lg:h-[calc(100vh-100px)]'>
    <Carousel
    className="rounded-xl "
    autoplay={true}
    autoplayDelay={3000}
    loop={true}
   
  >
    <img
      src={contact1}
      alt="image1"
      className="h-full w-full lg:object-contain"
    />
    <img
      src={contact2}
      alt="image2"
      className="h-full w-full object-contain"
    />
    <img
      src={contact3}
      alt="image3"
      className="h-full w-full object-contain"
    />
  </Carousel>
  </div>
  )
}

export default CarouselComp;