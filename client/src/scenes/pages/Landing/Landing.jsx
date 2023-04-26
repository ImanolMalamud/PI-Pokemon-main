import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

function Landing(props) {
  return (
    <div className="mainContainer">
      <div className="containerInfo">
        {/* <h2 className="catching-phrase">
          Find your favorite Pokemon and explore their stats and abilities
        </h2> */}
        {/* <img src="../../../img/home-background-paisaje.jpg" alt="" /> */}
        <Link to="/home">
          <button className="buttonGo">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Landing;
