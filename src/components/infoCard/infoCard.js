import React, { Component } from "react";
import photo from "../../img/Ege.jpg";
import "./infoCard.css";

class infoCard extends Component {
  render() {
    return (
      <div className="card">
        <img className="ege" src={photo} alt="EGE DURMAZ"></img>
        <div className="grid">
          <h1 className="card-name">Ege Durmaz</h1>
          <div className="border"></div>
          <h2 className="card-title">Junior Frontend Developer</h2>
        </div>
        <div className="card-footer">
          <div className="card-footer-items">
            <a
              className="insta"
              href="https://www.instagram.com/ege_durmz/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="medium"
              href="https://medium.com/@ege_durmaz09"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-medium"></i>
            </a>
            <a
              className="linked"
              href="https://www.linkedin.com/in/ege-durmz"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              className="git"
              href="https://github.com/Aegean09"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default infoCard;