import React from "react";
import "./Card.css";

const handleProjectLink = (prop) => {
  return (
    <div className="card-project-link">
      <a
        href={prop.githubLink}
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github"></i>
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
                  <h1 className="project-names">{item.projectName}</h1>
                  <p className="project-info">{item.description}</p>
                  <h3 className={item.techClass}>{item.technologies}</h3>
                </div>
                <div className="card-right">
                {item.githubLink !== "" ? handleProjectLink(item) : <></>}
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

//                 <div class="projects-cards">
//                     <div class="col-md-7 left">
//                         <h1>Portfolio <a id="website"href="https://ege-durmaz-portfolio.web.app/" target="_blank">Visit Now</a></h1>
//                         <h3>My own portfolio page that I made during internship with GittiGidiyor. Hosting it via Firebase Hosting</h3>
//                         <h3 id="port-lang">HTML CSS BOOTSTRAP JAVASCRIPT</h3>
//                         <a href="https://github.com/Aegean09/Portfolio-2"><img id="port-git" src="../file/images/icons/github-sign.svg" alt="GitHub"></a>
//                     </div>
//                     <div class="col-md-5 right">
//                        <img id="portfolio" class="project-logos" src="../file/images/E.svg" alt="">
//                     </div>
//                 </div>
//             </div>

export default Card;
