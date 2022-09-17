import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import About from "./Pages/About/About";
import Proje from "./Pages/Proje/Proje";
import Resume from "./Pages/Resume/Resume";

function App() {
  return (
    <div className="App">
        <Navbar className="navbar-t" />
        <About />
        <Resume />
        <Proje />
    </div>
  );
}

export default App;
