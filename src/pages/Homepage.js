import React from "react";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-container">
      <video autoPlay loop muted className="background-video">
        <source src="https://videos.pexels.com/video-files/5150586/5150586-sd_640_360_30fps.mp4" type="video/mp4" />
      </video>
      <div className="background-overlay"></div> {/* Overlay to dim the video */}
      <div className="content">
        <p className="animated-text">Skip the long queue in town and book your ride</p>
      </div>
    </div>
  );
};

export default HomePage;
