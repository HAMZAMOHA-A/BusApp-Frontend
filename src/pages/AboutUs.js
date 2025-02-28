import React from "react";
import "./AboutUs.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Us</h2>
        <p>
          We are committed to providing reliable, comfortable, and efficient transportation 
          solutions for our passengers.
        </p>
        <p>
          With a modern fleet and a vision to enhance urban commuting, we serve major routes 
          across various destinations, ensuring a seamless travel experience.
        </p>

        <h3>Why Choose Us?</h3>
        <ul>
          <li>Modern fleet of comfortable buses</li>
          <li>Professional and experienced drivers</li>
          <li>Convenient online booking system</li>
          <li>Reliable schedules and timely service</li>
          <li>Extensive route network</li>
        </ul>
      </div>

      <div className="about-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/LTZ1328-19-20241030-160332.jpg" alt="Bus Service" />
      </div>
    </div>
  );
};

export default About;