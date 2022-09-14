import React, { Component } from "react";
import "./About.css";
import Card from "../../components/infoCard/infoCard";

class About extends Component {
  render() {
    return (
      <div className="about">
        <Card className="info-card" />
      </div>
    );
  }
}

export default About;