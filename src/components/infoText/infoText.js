import React, { Component } from "react";
import "./infoText.css";

class infoText extends Component {
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
      <div className="info">
        <h1>Hello!</h1>
        <h2>I'm Ege Durmaz</h2>
        <div className="info-resume" onClick={this.scrollToResume}>
          Resume
        </div>
        <div className="info-proje" onClick={this.scrollToProje}>
          Projects
        </div>
        <p>
          In life, what I believe is you have to take every opportunity to add
          something to yourself. <br></br>
          <br></br>
          Since university I started to have a keen interest on pushing myself
          to the next level, forcing my foot on the next step of the ladder.
        </p>
      </div>
    );
  }
}

export default infoText;
