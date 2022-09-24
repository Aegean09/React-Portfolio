import React from "react";
import CV from "../../Ege_Durmaz_CV.pdf"
import "./Card.css";

const handleProjectLink = (prop) => {
  return (
    <div className="card-project-link">
      <a href={prop.githubLink} target="_blank" rel="noreferrer">
        <i className="fab fa-github"></i>
      </a>
    </div>
  );
};
const handleCVLink = () => {
  return (
    <div className="cv-link">
      <a className="cv-resume" target="_blank" href={CV} rel="noreferrer">
          Download CV
        </a>
    </div>
  );
};

const Card = (props) => {
  if (Object.values(props)[0][0].section === "resume") {
    return (
      <div className="container">
        <div className="section">
          <h2 className="resume-sections exp">
            {Object.values(props)[0][0].type === "Experience"
              ? "Experience"
              : "Education"}
          </h2>
          <>
          {Object.values(props)[0][0].type === "Experience"
              ? handleCVLink() : <></>}
          </>
          {Object.values(props)[0].map((item, idx) => {
            return (
              <div key={idx} className="cards">
                <div className="card-left">
                  <h1>{item.name}</h1>
                  <h2>{item.date}</h2>
                  <h3>{item.position}</h3>
                  <h3>{item.location}</h3>
                </div>
                <div className="card-right">
                  <p className="resume-info">{item.description}</p>
                  <div className="resume-logo-container">
                    <img
                      className={item.class + " resume-logos"}
                      src={item.logo}
                      alt={item.company}
                    ></img>
                  </div>
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
                  <h1 className="project-names">{item.projectName}</h1>
                  <p className="project-info">{item.description}</p>
                  <h3 className={item.techClass}>{item.technologies}</h3>
                  {item.githubLink !== "" ? handleProjectLink(item) : <></>}
                </div>
                <div className="card-right">
                  <div className="proje-logo-container">
                    <img
                      className={item.class + " proje-logos"}
                      src={item.logo}
                      alt={item.company}
                    />
                  </div>
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
