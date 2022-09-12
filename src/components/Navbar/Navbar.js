import React, { Component } from "react";
import { navitems } from "./NavItems";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar-items">
        <h1 className="navbar-logo">React</h1>
        <div className="menu-icon"></div>
        <ul>
          {navitems.map((item, idx) => {
            return (
              <li key={idx}>
                <a className={item.classN} href={item.url}>
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
