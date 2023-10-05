import React from "react";
import "./Topbar.css";
import ModalRegister from "../Modal/ModalRegister";
import { useState } from "react";

function Topbar() {
  const list = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Services", link: "services" },
    { name: "Members", link: "members" },
    { name: "Contacts", link: "contact" },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  if (modalOpen) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const [menuOpen, setMenuOpen] = useState(false);
  const toogleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="main-nav">
        <img
          src={require("../../assets/photos/pets/logo.webp")}
          alt="logo"
          className="main-logo"
        />
        <div className="menu" onClick={toogleMenu}>
          <ion-icon name="grid-outline"></ion-icon>{" "}
        </div>
        {menuOpen && (
          <ul className="menu-button">
            <li>
              <a onClick={toogleMenu} className="main-nav-link" href="#about">
                About
              </a>
            </li>
            <li>
              <a
                onClick={toogleMenu}
                className="main-nav-link"
                href="#services"
              >
                Services
              </a>
            </li>
            <li>
              <a onClick={toogleMenu} className="main-nav-link" href="#members">
                Members
              </a>
            </li>
            <li>
              <a onClick={toogleMenu} className="main-nav-link" href="#contact">
                Contacts
              </a>
            </li>

            <button
              onClick={toggleModal}
              className="main-nav-link  nav-profile "
            >
              <ion-icon
                name="person-circle-outline"
                className="nav-icon"
              ></ion-icon>
              Sign up
            </button>
            {modalOpen && <ModalRegister setOpenModal={setModalOpen} />}
          </ul>
        )}

        <ul className="main-nav-list">
          {list.map((item) => (
            <li>
              <a class="main-nav-link" href={`#${item.link}`}>
                {item.name}
              </a>
            </li>
          ))}
          <button onClick={toggleModal} className="btn ">
            <ion-icon
              name="person-circle-outline"
              className="nav-icon"
            ></ion-icon>
            <span>Sign up</span>
          </button>
          {modalOpen && <ModalRegister setOpenModal={setModalOpen} />}
        </ul>
      </nav>
    </header>
  );
}

export default Topbar;
