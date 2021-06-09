import Header from "./components/header/Header";
import Container from '@material-ui/core/Container';
import React from "react";
import Skills from "./components/skills/Skills";
import About from "./components/about/About";
import Career from "./components/career/Career";
import Education from "./components/education/Education";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Container>
        <About/>
        <Skills/>
        <Career/>
        <Education/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
