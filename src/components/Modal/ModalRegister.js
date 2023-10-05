import React, { useState } from "react";
import "./ModalRegister.css";

function ModalLog({ setOpenModal }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <h2 className="welcome-members">
            <strong>Register</strong>,to explore more:
          </h2>
          <form action="" className="registerForm">
            <input
              className="inputForm"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="off"
              placeholder="Name"
            />
            <input
              className="inputForm"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="off"
              placeholder="Phone"
            />
            <input
              className="inputForm"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              placeholder="Email"
            />
            <input
              className="inputForm"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <button className="buttonLogIn" type="submit">
              Sign up
            </button>
          </form>
          <div className="excess-btns">
            <button
              className="buttonSignup return-btn"
              onClick={() => {
                setOpenModal(false);
              }}
            >
              Return back?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalLog;
