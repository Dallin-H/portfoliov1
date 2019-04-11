import React, { Component } from "react";
import IconBar from "./Components/IconBar";
import About from './Views/About'
import Skills from './Views/Skills'
import Projects from './Views/Projects'
import Contact from './Views/Contact'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <About />
        <Skills />
        <Projects />
        <Contact />
        <IconBar />
      </div>
    );
  }
}

export default App;
