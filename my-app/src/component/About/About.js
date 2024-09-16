import React from "react";
import AboutCard from "./AboutCard";
import HeadTitle from "../../common/HeadTitle/HeadTitle";

const About = () => {
  return (
    <>
      <HeadTitle />
      <section className="about top">
        <div className="container">
          <AboutCard />
        </div>
      </section>

      <section className="features top">
        <div className="container aboutCard flex_space">
          <div className="row row1">
            <h1>
              Our <span>Feature</span>
            </h1>
            <p>Hotel Booking Management System, your one-stop solution for seamless hotel reservations and management. Our platform connects travelers with the best hotels worldwide, offering a user-friendly experience for booking, managing, and enjoying stays.</p>
            <p>Easy Booking: Effortlessly search, book, and manage your hotel reservations with our user-friendly interface.</p>
            <button className="secondary-btn">
              Explore More <i className="fas fa-long-arrow-alt-right"></i>
            </button>
          </div>
          <div className="row image">
            <img src="/images/feature-img-1.jpg" alt="" />
            <div className="control-btn">
              <button className="prev">
                <i className="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
