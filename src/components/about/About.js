import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Section from '../shared/Section';
import AboutItem from './AboutItem';
import { aboutItems } from './about-items';

function About() {
  const renderItems = aboutItems.map((item, index) => (
    <Grid item key={index}>
      <AboutItem
        index={index}
        icon={item.icon}
        description={item.description}
      />
    </Grid>
  ));

  return (
    <Section id="about" title="About">
      <Container>
        <Grid container spacing={4}>
          {renderItems}
        </Grid>
      </Container>
    </Section>
  );
}

export default About;
