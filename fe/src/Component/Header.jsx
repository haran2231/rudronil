import React, { useState } from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scrolling function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false); // Close menu after clicking
    }
  };

  return (
    <div className="main_header">
      {/* Top Header */}
      <header className="header">
        <div className="header_one">
          <p>
            <FontAwesomeIcon icon={faMobileAlt} /> +91 89399 41406
          </p>
          <p>
            <FontAwesomeIcon icon={faMobileAlt} /> 0422 4541450
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> naveen.sankar@rudronilfinserv.com
          </p>
        </div>
        <div className="header_two">
          <p>Follow us :</p>
          <p>
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </p>
          <p>
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </p>
          <p>
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </p>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="nav_menu">
        <div className="logo">
          <p>LOGO</p>
        </div>

        {/* Burger Icon for Mobile */}
        <button 
          className="burger" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label="Toggle menu"
        >
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </button>

        {/* Navigation Menu */}
        <div className={`menu_list ${menuOpen ? "open" : ""}`}>
          <a href="#home" onClick={() => scrollToSection("banner")}>Home</a>
          <a href="#about" onClick={() => scrollToSection("about")}>About</a>
          <a href="#services" onClick={() => scrollToSection("services")}>Services</a>
          <a href="#blog" onClick={() => scrollToSection("blog")}>Blog</a>
          <a href="#contact" onClick={() => scrollToSection("contact")}>Contact</a>

          {/* Get Quote button inside menu for mobile */}
          <div className="btn_quote_mobile">
            <a href="#quote" onClick={() => scrollToSection("contact")}>Get Quote</a>
          </div>
        </div>

        {/* Get Quote button stays visible on desktop */}
        <div className="btn_quote">
          <a href="#quote" onClick={() => scrollToSection("contact")}>Get Quote</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;
