import React from 'react';
import Typography from '@material-ui/core/Typography';
import Section from '../shared/Section';

function About() {
  return (
    <Section id="about" title="About">
      <Typography>
        I am a software engineer specialized in web development. I consider
        myself a person who can easily adapt to a team. I am always open to
        discuss in detail the technological aspects of every implementation,
        always looking for the best solutions and analyzing the pros and cons. I
        am a self-taught person, but also open to learn from others and to share
        my knowledge. I lived in France for two years, and now I am working in
        Dynatrace, Barcelona.
      </Typography>
    </Section>
  );
}

export default About;
