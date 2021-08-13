import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Introduction from './components/introduction/Introduction';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Career from './components/career/Career';
import Education from './components/education/Education';
import Courses from './components/courses/Courses';
import Footer from './components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Introduction />
      <Container>
        <About />
        <Skills />
        <Career />
        <Education />
        <Courses />
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
