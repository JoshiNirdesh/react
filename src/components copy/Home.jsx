import React from "react";
import Slider from "./Slider";
import Carousel1 from "./Carousel1";
import HeroSection from "./HeroSection";
import image1 from "../assets/nepal1.jpg";
import Reducer1 from "./Reducer1";
const Home = () => {
  return (
    <>
      <HeroSection color="light" backgroundImage={image1} />
      <Slider />
      <Reducer1 />
    </>
  );
};

export default Home;
