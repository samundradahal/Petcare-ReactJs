import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" class="main-container-contact">
      <div className="container">
        <h1 className="section-heading">Contact</h1>

        <div className="details">
          <div className="phone">
            <div className="main">Phone</div>
            <div className="main-data">
              <ion-icon name="call-outline"></ion-icon>
              <p>9860621606</p>
            </div>
          </div>

          <div className="email">
            <p className="main">Email</p>
            <div className="main-data">
              <ion-icon name="mail-outline"></ion-icon>
              <p>ktmpetcare@gamil.com</p>
            </div>
          </div>

          <div className="operation">
            <p className="main">Hours of Operation</p>
            <div className="main-data">
              <ion-icon name="hourglass-outline"></ion-icon>
              <p>Mon - Fri: 9am - 8pm</p>
            </div>
            <div className="main-data">
              <ion-icon name="hourglass-outline"></ion-icon>
              <p>Saturday: 9am - 4pm</p>
            </div>
          </div>

          <div className="location">
            <div className="main">Area of Service</div>
            <div className="main-data">
              <ion-icon name="location-outline"></ion-icon>
              <p>Thapa Gaun, Baneshwor</p>
            </div>
            <div className="main-data">
              <ion-icon name="location-outline"></ion-icon>
              <p>Maitighar, Kathmandu</p>
            </div>
            <div className="main-data">
              <ion-icon name="location-outline"></ion-icon>
              <p>Patan Dhoka, Lalitpur</p>
            </div>
          </div>
        </div>

        <form className="form">
          <div className="inputs">
            <input
              type="text"
              mame="text"
              className="inputfield"
              placeholder="Name:"
              required
              autoComplete="off"
            />
            <input
              className="inputfield"
              type="email"
              name="email"
              id="email"
              placeholder="Email:"
              autoComplete="off"
              required
            />
          </div>
          <textarea
            name="message"
            id="message"
            cols="10"
            rows="5"
            placeholder="Type message here:"
            required
            autoComplete="off"
          ></textarea>
          <input type="submit" class="last-button" value="SUBMIT" />
        </form>

        <div className="last-icons">
          <a className="logo" href="#">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
          <a className="logo" href="#">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a className="logo" href="#">
            <ion-icon name="logo-youtube"></ion-icon>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
