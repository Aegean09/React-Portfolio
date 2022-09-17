import React, { Component } from "react";
import { cardItems } from "./CardItems";
import "./Card.css";

class Card extends Component {
  render() {
    return (
      <div className="container">
        <div className="section">
          <h2 className="resume-sections exp">Experience</h2>
          <button className="button">Download CV</button>
          {cardItems.map((item, idx) => {           
              return (
                <div key={idx} className="cards">
                  <div className="card-left">
                    <h1>{item.type==="experience" ? item.company : item.school}</h1>
                    <h2>{item.date}</h2>
                    <h3>{item.position}</h3>
                    <h3>{item.location}</h3>
                  </div>
                  <div className="card-right">
                    <p className="resume-info">{item.description}</p>
                    <img
                      className={item.class}
                      src="../file/images/ty.png"
                      alt={item.company}
                    ></img>
                  </div>
                </div>
              );
          })}
        </div>
      </div>
    );
  }
}

export default Card;
