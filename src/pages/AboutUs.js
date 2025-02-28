import React from "react";
import "./AboutUs.css";  // You can create a separate CSS file for styling

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-header">
        <h1>About Us</h1>
      </div>
      <div className="about-us-content">
        <p>
          Welcome to Bus Booking, your reliable partner for booking buses online. Our platform is designed to provide an easy-to-use, fast, and secure service for booking buses for various purposes, whether for travel, business, or leisure.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify the process of bus booking and make it accessible to everyone, anywhere. We aim to provide high-quality service, seamless booking experiences, and affordable travel options.
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Easy and fast booking process</li>
          <li>Affordable and transparent pricing</li>
          <li>24/7 customer support</li>
          <li>Wide selection of buses and routes</li>
        </ul>
        <h2>Contact Us</h2>
        <p>
          If you have any questions or need assistance, feel free to reach out to us. You can contact us via email at <a href="mailto:support@busbooking.com">support@busbooking.com</a>.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
