import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Career from './components/career/Career';
import Education from './components/education/Education';
import Courses from './components/courses/Courses';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <About />
        <Skills />
        <Career />
        <Education />
        <Courses />
      </Container>
    </BrowserRouter>
  );
}

export default App;
