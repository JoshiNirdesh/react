import React from 'react'
import Slider from './Slider'
import Carousel1 from './Carousel1'
import HeroSection from './HeroSection'
import image1 from "../assets/nepal1.jpg"

const Home = () => {



  return (
   <>
 
 <HeroSection color="light" backgroundImage={image1} />  
  <Slider/>
   </>
  )
}

export default Home
