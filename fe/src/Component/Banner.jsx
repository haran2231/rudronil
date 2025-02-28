import React, { useState, useEffect } from "react";
import "./Banner.css";
import slide1 from "../assets/r1.jpg"; 
import slide2 from "../assets/r2.jpeg"; 
import slide3 from "../assets/r3.jpeg"; 

const images = [
  { url: slide3, text: "Welcome to Rudronil Finserv!!" },
];

function Banner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 5000); // Auto-slide every 5 seconds

    return () => clearInterval(interval); // Cleanup
  }, []);

  return (
    <div className="banner">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${image.url})` }}
        >
          <div className="overlay">
            <h2>{image.text}</h2>
            <p className="overlay_contact"><a href="#contact" onClick={() => scrollToSection("contact")}>Contact US</a></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;
