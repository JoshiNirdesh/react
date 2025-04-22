import { useContext, useState } from "react";
import "./AboutUs.css";

import image1 from "../assets/nepal1.jpg";
import image2 from "../assets/nepal2.jpg";
import image3 from "../assets/nepal3.jpg";
import SmallHero from "./SmallHero";
import ProductContext from "../Context/ProductContext";
import Splide from "./Splide";

const AboutUs = () => {
  const context = useContext(ProductContext);
  let { fruit } = context;
  console.log("This is fruit", { fruit });

  const [currentSlide, setCurrentSlide] = useState(0);

  const nepalImages = [
    {
      url: image2,
      alt: "Mount Everest",
      caption: "The majestic Himalayas",
    },
    {
      url: image1,
      alt: "Temple",
      caption: "Spiritual heritage of Nepal",
    },
    {
      url: image3,
      alt: "Pokhara ",
      caption: "Serene lakes of Pokhara",
    },
    {
      url: image1,
      alt: "Kathmandu",
      caption: "Ancient architecture",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === nepalImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? nepalImages.length - 1 : prev - 1));
  };

  return (
    <>
      <div className="about-container">
        <section className="about-content">
          <h1>About Nepal</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            dicta nemo, non harum labore enim expedita quia ratione hic,
            recusandae minus, quaerat vel dolore placeat alias facere ab sequi!
            Officiis?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
            facere ratione adipisci architecto, laboriosam ab, ipsa nisi impedit
            consectetur quisquam repellendus! Ut recusandae sapiente nisi, ipsum
            hic doloribus ex. Voluptates.
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <h3>15,000+</h3>
              <p>Happy Travelers</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Local Partners</p>
            </div>
            <div className="stat-item">
              <h3>100%</h3>
              <p>Nepali Team</p>
            </div>
          </div>
        </section>

        <section className="nepal-carousel">
          <h2>Discover Nepal's Beauty</h2>
          <div className="carousel-container">
            <button className="carousel-btn prev" onClick={prevSlide}>
              &lt;
            </button>

            <div className="slide">
              <img
                src={nepalImages[currentSlide].url}
                alt={nepalImages[currentSlide].alt}
              />
              <div className="caption">{nepalImages[currentSlide].caption}</div>
            </div>

            <button className="carousel-btn next" onClick={nextSlide}>
              &gt;
            </button>
          </div>
          <div className="carousel-dots">
            {nepalImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUs;
