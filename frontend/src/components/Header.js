import React from "react";
import video from "../assets/video.mp4";
import "../styles/header.css";

const Header = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video/mp4"></video>
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
            Our Packages
          </span>
          <h1 data-aos="fade-up" className="homeTitle">
            Search your Holiday
          </h1>
        </div>

        <div className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your Destination:</label>
            <div className="input flex">
              <input type="text" placeholder="Enter Name Here..." />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Select your Date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="leftIcons"></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
