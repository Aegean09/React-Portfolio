import React, { Component } from "react";
import { navitems } from "./NavItems";
import "./Navbar.css";

class Navbar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  scrollToAbout = () => {
    const element = document.querySelector(".about");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  scrollToResume = () => {
    const element = document.querySelector(".resume");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  scrollToProje = () => {
    const element = document.querySelector(".proje");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  render() {
    return (
      <nav className="navbar">
        <h1 className="navbar-logo">Ege Durmaz</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {navitems.map((item, idx) => {
            return (
              <li className="navbar-buttons" key={idx}>
                <div
                  className={item.classN}
                  onClick={
                    item.id === "about"
                      ? this.scrollToAbout
                      : item.id === "resume"
                      ? this.scrollToResume
                      : this.scrollToProje
                  }
                >
                  {item.title}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
