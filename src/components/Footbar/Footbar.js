import React from "react";
import "./Footbar.css";

const Footbar = (props) => {
  return (
    <nav className="footbar">
      <div className="footbar-items">
        <div className="footbar-left">
          <h1 className="footbar-logo">Copyright © 2022 by Ege Durmaz.</h1>
        </div>
        <div className="footbar-right">
          <div className="footbar-contacts fa fa-phone"></div>
          <h1 className="footbar-contacts">+90 543 124 2550</h1>
          <div className="footbar-contacts fa fa-envelope"></div>
          <h1 className="footbar-contacts">ege_durmaz09@hotmail.com</h1>
        </div>
      </div>
    </nav>
  );
};

export default Footbar;
