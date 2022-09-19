import React from "react";
import "./Card.css";

// const handleButton = () =>{

//    <div>AAAAAAAAA</div>
// }

const Card = (props) => {
  if (Object.values(props)[0][0].section === "resume") {
    return (
      <div className="container">
        <div className="section">
          <h2 className="resume-sections exp">
            {Object.values(props)[0][0].type === "Experience" ? "Experience" : "Education"}
          </h2>
          {Object.values(props)[0].map((item, idx) => {
            return (
              <div key={idx} className="cards">
                <div className="card-left">
                  <h1>
                    {item.name}
                  </h1>
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
  if (Object.values(props)[0][0].section === "proje") {
    return (
      <div className="container">
        <div className="section">
          {Object.values(props)[0].map((item, idx) => {
            return (
              <div key={idx} className="cards">
                <div className="card-left">
                  <h1 className="project-names">
                    {item.projectName}
                  </h1>
                  <h2 className="technology-names">{item.technologies}</h2>
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
};

export default Card;
