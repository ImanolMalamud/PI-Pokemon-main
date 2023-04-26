import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Layout.css";
const Layout = () => {
  return (
    <div className="layout-container">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
