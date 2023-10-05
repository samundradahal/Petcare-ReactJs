import React from "react";
import { Route, Routes } from "react-router-dom";
import ModalLog from "../../components/Modal/ModalLog";
import ModalRegister from "../../components/Modal/ModalRegister";
import Home from "../Home/Home";

export const FullApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/profile" element={<ModalLog />}></Route>
      <Route path="/register" element={<ModalRegister />}></Route>
    </Routes>
  );
};
