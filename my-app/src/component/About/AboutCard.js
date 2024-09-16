import React from "react";
import "./About.css";

const AboutCard = () => {
  return (
    <>
      <div className="aboutCard mtop flex_space">
        <div className="row row1">
          <h4>About Us</h4>
          <h1>
            Welcome to <span>Hotel Booking Management System</span>.
          </h1>
          <p>For guests, we provide an intuitive interface to search, book, and manage hotel reservations effortlessly. Our secure payment system ensures peace of mind, while our reviews and ratings help you make informed decisions.</p>
          <p>Our dedicated support team is always here to assist you, ensuring a smooth and pleasant experience. Join us and discover a smarter way to travel and manage hospitality. Experience convenience, reliability, and excellence with Hotel Booking Management System Name.</p>
          <button className="secondary-btn">
            Explore More <i className="fas fa-long-arrow-alt-right"></i>
          </button>
        </div>
        <div className="row image">
          <img src="/images/about-img-1.jpg" alt="" />
          <div className="control-btn">
            <button className="prev">
              <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCard;
