import React from 'react'
import Img1 from "../../img/Hero1.jpg"
import Img2 from "../../img/Hero2.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Hero = () => {
  return (
    <Carousel
      showStatus={false}
      autoPlay={true}
      showArrows={true}
      showThumbs={false}
      infiniteLoop={true}
      interval={3000}
      stopOnHover={true}
      swipeable={true}
      className="pt-3 drop-shadow-lg"
    >
      <div className="p-3 drop-shadow-md">
        <img src={Img1} alt="" />
      </div>
      <div className="p-3 drop-shadow-md">
        <img src={Img2} alt="" />
      </div>
    </Carousel>
  );
}

export default Hero
