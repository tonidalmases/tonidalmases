import React, { useEffect } from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import Introduction from './components/introduction/Introduction';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Career from './components/career/Career';
import Education from './components/education/Education';
import Courses from './components/courses/Courses';
import Footer from './components/footer/Footer';
import useScrollPosition from './utils/use-scroll-position';
import { setScrollPosition } from './store/scroll-slice';
import { setCurrentSection } from './store/sections-slice';

function App() {
  const dispatch = useDispatch();
  const scrollPosition = useSelector((state) => state.scroll.position);
  const sectionsPositions = useSelector((state) => state.sections.positions);

  useScrollPosition((position) => {
    dispatch(setScrollPosition(position));
  });

  useEffect(() => {
    const section = Object.entries(sectionsPositions).reduce(
      (acc, [id, position]) => (scrollPosition >= position ? id : acc),
      undefined
    );

    dispatch(setCurrentSection(section));
  }, [scrollPosition, sectionsPositions]);

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
