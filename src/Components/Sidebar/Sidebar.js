import React from "react";
import "./Sidebar.css";
import Logo from "../assets/Logo.jpeg";
import Footer from "../Footer/Footer";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo-container">
        {" "}
        <img className="logo-img" src={Logo} alt="logo" />
      </div>
      <Footer />
    </div>
  );
}
export default Sidebar;
