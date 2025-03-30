import React from 'react';
import ReactCardSlider from 'react-card-slider-component';

const Slider = () => {
  
  const sliderClick = (slide) => {
    console.log("Slide clicked:", slide);
  };

  const slides = [
    { image: "https://picsum.photos/200/300", title: "Title 1", description: "Description 1", clickEvent: () => sliderClick("Title 1") },
    { image: "https://picsum.photos/600/500", title: "Title 2", description: "Description 2", clickEvent: () => sliderClick("Title 2") },
    { image: "https://picsum.photos/700/600", title: "Title 3", description: "Description 3", clickEvent: () => sliderClick("Title 3") },
    { image: "https://picsum.photos/500/400", title: "Title 4", description: "Description 4", clickEvent: () => sliderClick("Title 4") },
    { image: "https://picsum.photos/800/700", title: "Title 5", description: "Description 5", clickEvent: () => sliderClick("Title 5") },
  ];

  return <ReactCardSlider slides={slides} />;
};

export default Slider;
