import React from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";
import Section from "../shared/Section";

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  image: {
    justifySelf: 'center',
  }
});

function About() {
  const classes = useStyles();

  return (
    <Section id="about" title="About">
      <div className={classes.container}>
        <div className={classes.image}>
          <img src="logo192.png"/>
        </div>

        <div>
          <Typography>
            I am a software engineer specialized in web development. I consider myself a person who can easily adapt to
            a team. I am always open to discuss in detail the technological aspects of every implementation, always
            looking for the best solutions and analyzing the pros and cons. I am a self-taught person, but also open to
            learn from others and to share my knowledge. I lived in France for two years, and now I am working in
            Dynatrace, Barcelona.
          </Typography>
        </div>
      </div>
    </Section>
  )
}

export default About;
