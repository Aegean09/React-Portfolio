import React from "react";
import "./App.css";
import Footbar from "./components/Footbar/Footbar";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About/About";
import Proje from "./Pages/Proje/Proje";
import Resume from "./Pages/Resume/Resume";

function App() {
  return (
    <div className="App">
      <div className="light x1"></div>
      <div className="light x2"></div>
      <div className="light x3"></div>
      <div className="light x4"></div>
      <div className="light x5"></div>
      <div className="light x6"></div>
      <div className="light x7"></div>
      <div className="light x8"></div>
      <div className="light x9"></div>
      <Navbar className="navbar-t" />
      <About />
      <Resume />
      <Proje />
      <Footbar className="footbar-t" />
    </div>
  );
}

export default App;
