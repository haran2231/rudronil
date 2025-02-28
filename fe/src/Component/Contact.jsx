import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // FontAwesome Icons
import "./Contact.css"; // Import CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    city: "",
    loanType: "",
    message: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [errors, setErrors] = useState({});

  const loanOptions = [
    "Personal Loan",
    "Home Loan",
    "Car Loan",
    "Business Loan",
    "Education Loan",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if(!checked){
      alert('hg')
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  
  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Full Name is required";
    if (!formData.mobile.match(/^\d{10}$/)) errors.mobile = "Enter a valid 10-digit mobile number";
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) errors.email = "Enter a valid email address";
    if (!formData.city.trim()) errors.city = "City is required";
    if (!formData.loanType) errors.loanType = "Please select a loan type";
    if (!formData.message.trim()) errors.message = "Message cannot be empty";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      try {
        const response = await fetch("https://rudronil-1.onrender.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
        if (response.ok) {
          alert("Form submitted successfully!");
          setFormData({
            name: "",
            mobile: "",
            email: "",
            city: "",
            loanType: "",
            message: "",
          });
          setIsChecked(false);
        } else {
          alert(result.error || "Something went wrong!");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to submit form. Please try again later.");
      }
    }
  };
  

  return (
    <div className="contact-container">
      {/* Left Side - Contact Form */}
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          {errors.city && <p className="error">{errors.city}</p>}

          <select
            name="loanType"
            value={formData.loanType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select Loan Type
            </option>
            {loanOptions.map((loan, index) => (
              <option key={index} value={loan}>
                {loan}
              </option>
            ))}
          </select>
          {errors.loanType && <p className="error">{errors.loanType}</p>}

          <textarea
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          <div className="terms-checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="terms">I agree to the Terms and Conditions</label>
          </div>

          <button type="submit" disabled={!isChecked}>
            Submit
          </button>
        </form>
      </div>

      {/* Right Side - Address Details */}
      <div className="contact-info">
        <h2>Our Office</h2>
        <p><FaMapMarkerAlt /> MJT Building, First Floor</p>
        <p>9-A, Bharathiyar Road, P.N. Palayam</p>
        <p>Coimbatore-641 037</p>
        
        <h3>Contact Details</h3>
        <p><FaPhoneAlt /> +91 98765 43210</p>
        <p><FaEnvelope /> info@example.com</p>
      </div>
    </div>
  );
};

export default ContactForm;
