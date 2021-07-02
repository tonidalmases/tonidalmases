import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Section from '../shared/Section';
import AboutItem from './AboutItem';
import { aboutItems } from './about-items';
import { getElementBottomPosition } from '../../utils/utils';

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
    <Section
      ref={(cont) => console.log(getElementBottomPosition(cont))}
      id="about"
      title="About"
    >
      <Container>
        <Grid container spacing={4}>
          {renderItems}
        </Grid>
      </Container>
    </Section>
  );
}

export default About;
