import React from "react";
import Profile from "../components/Profile/Profile";
import "./Main.css";
import About from "../components/About/About";
import Cards from "../components/Cards/Cards";
import Appointment from "../Appointment/Appointment";
function Main() {
  return (
    <>
      <div className="main-container">
        <Profile />
        <div className="main-section">
          <div className="left-part">
            <About />
            <Cards />
          </div>
          <div className="right-part">
            <Appointment />
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
