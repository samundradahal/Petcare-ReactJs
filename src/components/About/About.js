import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-me">
      <figure className="about-me-imgs">
        <img
          src={require("../../assets/photos/pets/two.png")}
          alt=""
          className="about-me-img"
        />
      </figure>
      <div className="text">
        <h1 className="about-me-heading">About Us</h1>
        <p>
          At our pet care service, we are dedicated to providing exceptional
          care for your furry family members. We offer a wide range of services,
          including veterinary care, dental care, check-ups, grooming, and much
          more.
          <br /> <br /> Our team of experienced professionals is passionate
          about animals and committed to ensuring that your pets receive the
          best possible care. When you bring your pet to our facility, you can
          rest assured that they will be in good hands. Our veterinary services
          include routine check-ups, vaccinations, preventative care, and more.
          We also provide specialized care for pets with chronic conditions or
          injuries.
        </p>
        <a href="#contact" className="btn read-more">
          Learn More
        </a>
      </div>
    </section>
    // </section>
  );
}

export default About;
