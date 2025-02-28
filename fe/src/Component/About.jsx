import React from "react";
import "./About.css";
import aboutImage from "../assets/about.jpg"; // Make sure to add your image in the assets folder

function AboutUs() {
  return (
    <section className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Us" />
        </div>
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            We are committed to providing top-notch financial solutions tailored to your needs.
            With years of expertise, we help individuals and businesses achieve their financial goals
            through our range of services, including loans, investments, and banking solutions.
          </p>
          <p>
            Our mission is to make financial services accessible, transparent, and seamless.
            Whether you're looking for a personal loan, a business investment, or a home loan,
            we have the right solutions for you.
          </p>
          <button className="about-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
