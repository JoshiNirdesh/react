import React, { useRef } from 'react';
import Slider from 'react-slick';
import './Carousel.css'; // Custom CSS file for styling

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../assets/nepal1.jpg'
import image2 from '../assets/nepal2.jpg'
import image3 from '../assets/nepal3.jpg'

const Carousel = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider ref={sliderRef} {...settings}>
        <div className="carousel-slide">
          <img src={image1}alt="First slide" />
        </div>
        <div className="carousel-slide">
          <img src={image2} alt="Second slide" />
        </div>
        <div className="carousel-slide">
          <img src={image3} alt="Third slide" />
        </div>
      </Slider>

      {/* Custom Prev/Next Buttons inside the image */}
      <button className="prev-button" onClick={() => sliderRef.current.slickPrev()}>
        &#10094;
      </button>
      <button className="next-button" onClick={() => sliderRef.current.slickNext()}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
