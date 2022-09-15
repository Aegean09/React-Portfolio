import React, { Component } from "react";
import "./About.css";
import InfoCard from "../../components/infoCard/infoCard";
import InfoText from "../../components/infoText/infoText";

class About extends Component {
  render() {
    return (
      <div className="about">
        <InfoCard className="info-card" />
        <InfoText className="info-text" />
      </div>
    );
  }
}

export default About;