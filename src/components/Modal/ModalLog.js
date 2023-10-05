import React, { useState } from "react";
import "./ModalLog.css";

function ModalLog({ setOpenModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <div className="modal">
        <div className="overlay"></div>
        <div className="modal-content">
          <h2 className="welcome-members">
            <strong>WELCOME</strong> back ,friends :
          </h2>
          <form action="" className="loginForm">
            <input
              className="inputFormLogIn"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              placeholder="Email"
            />
            <input
              className="inputFormLogIn"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <button className="buttonLogIn" type="submit">
              Log In
            </button>
          </form>
          <div className="excess-btns">
            <button className="buttonLogIn forgot-btn">Forgot password?</button>
            <button className="buttonLogIn register-btn">Register</button>
            <button className="buttonLogIn return-btn">Return back?</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalLog;
