import React from 'react';
import './HeroSection.css';

const HeroSection = ({ color, backgroundImage }) => {
  return (
    <div className={`hero-container bg-${color}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1 className={`hero-title text-${color}`}>Welcome to Nepal</h1>
        <p className="hero-description">We're here to make your experience unforgettable!</p>
        <button className={`hero-btn bg-color`}>Get Started</button>
      </div>
    </div>
  );
};

export default HeroSection;
