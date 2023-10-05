import React from "react";
import "./Testimonial.css";

function Testimonial() {
  return (
    <section className="main-container">
      <h1 className="primary-heading">What Pet Owners Say</h1>
      <div className="testimonial">
        <div className="testimonial-one">
          <div className="testimonial-img-quote">
            <img
              src={require("../../assets/photos/testimonials/three.jpg")}
              alt="client"
              className="testimonial-img"
            />
            <blockquote>Very Professional</blockquote>
          </div>
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eius
            doloremque, eveniet tempore sint aliquid beatae distinctio iste
            voluptas nam."
          </p>
          <p className="testimonial-name">-Kiran Neupane</p>
        </div>

        <div className="testimonial-two">
          <div className="testimonial-img-quote">
            <img
              src={require("../../assets/photos/testimonials/two.jpg")}
              alt="client"
              className="testimonial-img"
            />
            <blockquote>Great Service</blockquote>
          </div>
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eius
            doloremque, eveniet tempore sint aliquid beatae distinctio iste
            voluptas nam."
          </p>
          <p className="testimonial-name"> - Sangeet Chand</p>
        </div>

        <div className="testimonial-three">
          <div className="testimonial-img-quote">
            <img
              src={require("../../assets/photos/testimonials/four.jpg")}
              alt="client"
              className="testimonial-img"
            />
            <blockquote>Kind & Loving</blockquote>
          </div>
          <p className="testimonial-text">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi eius
            doloremque, eveniet tempore sint aliquid beatae distinctio iste
            voluptas nam."
          </p>
          <p className="testimonial-name"> - Royal Katwal</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
