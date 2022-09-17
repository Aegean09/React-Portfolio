import Card from "../../components/Card/Card";
import React, { Component } from "react";
import "./Resume.css";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <h1 className="section-title">Resume</h1>
        <Card />
      </div>
    );
  }
}

export default Resume;