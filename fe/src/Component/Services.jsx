import React from "react";
import "./Services.css";
import personalLoan from "../assets/p1.webp";
import mortgageLoan from "../assets/p11.jpg";
import businessLoan from "../assets/p10.jpg";
import educationLoan from "../assets/p6.png";
import marriageLoan from "../assets/p7.png";
import carLoan from "../assets/p5.png";
import savingsAccount from "../assets/p7.jpg";
import dematAccount from "../assets/p8.png";
import homeLoan from "../assets/p9.jpg";
import lapLoan from "../assets/p12.png";

const services = [
  {
    url: personalLoan,
    type: "Personal Loan",
    text: "Get instant personal loans for your financial needs with low interest rates.",
  },
  {
    url: mortgageLoan,
    type: "Mortgage Loan",
    text: "Secure a mortgage loan against your property for larger financial requirements.",
  },
  {
    url: businessLoan,
    type: "Business Loan",
    text: "Expand your business with flexible business loans tailored for your growth.",
  },
  {
    url: educationLoan,
    type: "Education Loan",
    text: "Fund your higher education with easy repayment options and low interest rates.",
  },
  {
    url: marriageLoan,
    type: "Marriage Loan",
    text: "Make your dream wedding come true with our customized marriage loan plans.",
  },
  {
    url: carLoan,
    type: "Car Loan",
    text: "Drive your dream car home with our quick and easy car loan approvals.",
  },
  {
    url: savingsAccount,
    type: "Savings & Current A/C",
    text: "Open a savings or current account with high interest rates and benefits.",
  },
  {
    url: dematAccount,
    type: "Demat Account",
    text: "Start investing in the stock market with a seamless Demat account opening.",
  },
  {
    url: homeLoan,
    type: "Home Loan",
    text: "Buy your dream home with our low-interest and long-term home loan options.",
  },
  {
    url: lapLoan,
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
            <img src={service.url} alt={service.type} />
            <h3>{service.type}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
