import React, { Component } from "react";
import Card from "../../components/Card/Card";
import "./Proje.css";

import { projectItems } from "./ProjeItems";
class Proje extends Component {
  render() {
    return (
      <div className="proje">
        <h1 className="section-title">Projects </h1>
        <Card prop={projectItems} />
      </div>
    );
  }
}

export default Proje;
