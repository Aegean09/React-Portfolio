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
  
  handleItemClass = (item) => {
    return item.classNot;
  };

  render() {
    return (
      <nav className="navbar-items">
        <h1 className="navbar-logo">Ege Durmaz</h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {navitems.map((item, idx) => {
            return (
              <li key={idx}>
                <a
                  className={
                    this.state.clicked ? item.classN : this.handleItemClass(item)
                  }
                  href={item.url}
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
