import React, { Component } from "react";
import "./infoText.css";

class infoText extends Component {
  render() {
    return (
      <div class="info">
        <h1>Hello!</h1>
        <h2>I'm Ege Durmaz</h2>
        <a className="info-resume" href="pages/resume.html">
          Resume
        </a>
        <a className="info-projects" href="pages/projects.html">
          Projects
        </a>
        <p>
          In life, what I believe is you have to take every opportunity to add
          something to yourself. <br></br><br></br> 
          Since university I started to have a keen interest on pushing myself to the next level, forcing my foot on the
          next step of the ladder.
        </p>
      </div>
    );
  }
}

export default infoText;
