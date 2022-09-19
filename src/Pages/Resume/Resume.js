import Card from "../../components/Card/Card";
import React, { Component } from "react";
import "./Resume.css";
import { resumeItems } from "./ResumeItems";
import { educationItems } from "./EducationItems";

class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <h1 className="section-title">Resume</h1>
        <Card items={resumeItems} />
        <Card items={educationItems} />
      </div>
    );
  }
}

export default Resume;
