import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from '../assets/nepal1.jpg'
import image2 from '../assets/nepal2.jpg'
import image3 from '../assets/nepal3.jpg'

// Example card component
const CardSlider = () => {
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll at once
    nextArrow: <button className="slick-next">Next</button>, // Custom Next button
    prevArrow: <button className="slick-prev">Prev</button>, // Custom Prev button
    responsive: [
      {
        breakpoint: 1024, // For devices larger than 1024px
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768, // For devices larger than 768px
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    
    <div className="slider-container">
      <h1 className='about-title'>About Us</h1>
      <Slider {...settings}>
        <div className="card">
          <img src={image1} alt="Card 1" />
          <h3>Card 1</h3>
          <p>Some content about Card 1</p>
        </div>
        <div className="card">
          <img src={image2} alt="Card 2" />
          <h3>Card 2</h3>
          <p>Some content about Card 2</p>
        </div>
        <div className="card">
          <img src={image3} alt="Card 3" />
          <h3>Card 3</h3>
          <p>Some content about Card 3</p>
        </div>
        <div className="card">
          <img src={image1} alt="Card 4" />
          <h3>Card 4</h3>
          <p>Some content about Card 4</p>
        </div>
      </Slider>
    </div>
  );
};

export default CardSlider;
