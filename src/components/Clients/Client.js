import React from "react";
import "./Client.css";

function Client() {
  return (
    <section id="members" class="clients">
      <h1 className="primary-heading ">Happy Clients</h1>
      <div className="client-imgs">
        <div className="client-image">
          <img
            src={require("../../assets/photos/pets-with-vet/one.jpg")}
            className="image"
            alt="img-1"
          />
        </div>
        <div className="client-image">
          <img
            className="image"
            src={require("../../assets/photos/pets-with-vet/two.jpg")}
            alt="img-2"
          />
        </div>
        <div className="client-image">
          <img
            src={require("../../assets/photos/pets-with-vet/three.jpg")}
            className="image"
            alt="img-3"
          />
        </div>
        <div className="client-image">
          <img
            src={require("../../assets/photos/pets-with-vet/four.jpg")}
            className="image"
            alt="img-4"
          />
        </div>
        <div className="client-image">
          <img
            src={require("../../assets/photos/pets-with-vet/five.jpg")}
            className="image"
            alt="img-5"
          />
        </div>
        <div className="client-image">
          <img
            src={require("../../assets/photos/pets-with-vet/six.jpg")}
            className="image"
            alt="img-6"
          />
        </div>
      </div>
    </section>
  );
}

export default Client;
