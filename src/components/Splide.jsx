import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import image1 from "../assets/nepal1.jpg";
import image2 from "../assets/nepal2.jpg";
import image3 from "../assets/nepal3.jpg";

const slides = [
  { src: image1, alt: "Nepal 1" },
  { src: image2, alt: "Nepal 2" },
  { src: image3, alt: "Nepal 3" },
  { src: image1, alt: "Nepal 1" },
  { src: image2, alt: "Nepal 2" },
  { src: image3, alt: "Nepal 3" },
];

function GalleryPage() {
  return (
    <div style={styles.pageContainer}>
      <div className="gallery-wrapper" style={styles.wrapper}>
        <div style={styles.titleContainer}>
          <h2>Gallery of Nepal</h2>
          <p style={styles.description}>
            Discover the beauty of Nepal through this collection of stunning
            images.
          </p>
        </div>

        <Splide
          options={{
            perPage: 2,
            height: "30rem",
            gap: "10px",
            rewind: true,
            pagination: false,
            arrows: true,
            breakpoints: {
              768: {
                perPage: 1,
                height: "20rem",
              },
            },
          }}
        >
          {slides.map((slide, index) => (
            <SplideSlide key={index}>
              <div style={styles.imageContainer}>
                <img src={slide.src} alt={slide.alt} style={styles.image} />
                <div style={styles.overlay}></div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    backgroundColor: "#f4f4f4", // Background color for the whole page
    padding: "2rem 0", // Padding for the page
    fontFamily: "'Arial', sans-serif",
  },
  wrapper: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 1rem", // Padding around the gallery content
    textAlign: "center",
  },
  titleContainer: {
    marginBottom: "2rem",
  },
  title: {
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "2.5rem",
    fontWeight: "600",
    color: "#333",
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
  },
  description: {
    fontSize: "1.1rem",
    color: "#666",
    lineHeight: "1.6",
    marginTop: "0.5rem",
  },
  imageContainer: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease-in-out",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "transform 0.3s ease, filter 0.3s ease",
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.4)",
    transition: "opacity 0.3s ease",
    opacity: 0,
  },
};

export default GalleryPage;
