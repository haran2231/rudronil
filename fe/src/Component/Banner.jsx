import React from "react";
import "./Banner.css";
import myVideo from "../assets/bannervideo.mp4";


function Banner() {
  return (
    <div className="banner">
      <video autoPlay loop muted className="banner-video">
        <source src={myVideo} type="video/mp4" />
      </video>

      <div className="overlay">
        <h2>Welcome to Rudronil Finserv!!</h2>
        <p className="overlay_contact">
          <a href="#contact">Contact Us</a>
        </p>
      </div>
    </div>
  );
}

export default Banner;
