import React from "react";
import "./Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHome,
  faBriefcase,
  faGraduationCap,
  faRing,
  faCar,
  faPiggyBank,
  faChartLine,
  faBuilding,
  faLaptop
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faUser,
    type: "Personal Loan",
    text: "Get instant personal loans for your financial needs with low interest rates.",
  },
  {
    icon: faHome,
    type: "Mortgage Loan",
    text: "Secure a mortgage loan against your property for larger financial requirements.",
  },
  {
    icon: faBriefcase,
    type: "Business Loan",
    text: "Expand your business with flexible business loans tailored for your growth.",
  },
  {
    icon: faGraduationCap,
    type: "Education Loan",
    text: "Fund your higher education with easy repayment options and low interest rates.",
  },
  {
    icon: faRing,
    type: "Marriage Loan",
    text: "Make your dream wedding come true with our customized marriage loan plans.",
  },
  {
    icon: faCar,
    type: "Car Loan",
    text: "Drive your dream car home with our quick and easy car loan approvals.",
  },
  {
    icon: faPiggyBank,
    type: "Savings & Current A/C",
    text: "Open a savings or current account with high interest rates and benefits.",
  },
  {
    icon: faChartLine,
    type: "Demat Account",
    text: "Start investing in the stock market with a seamless Demat account opening.",
  },
  {
    icon: faBuilding,
    type: "Home Loan",
    text: "Buy your dream home with our low-interest and long-term home loan options.",
  },
  {
    icon: faLaptop,
    type: "Laptop Loan",
    text: "Leverage your property to get a Loan Against Property with easy terms.",
  },
];

function Services() {
  return (
    <div className="services">
      <h1>OUR SERVICES</h1>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <FontAwesomeIcon icon={service.icon} style={{ color: "#007bff", fontSize: "40px", marginBottom: "10px" }} />
            <h3>{service.type}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
