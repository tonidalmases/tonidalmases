import React from 'react';
import { makeStyles, Typography, Box, Grid } from '@material-ui/core';
import Section from '../shared/Section';

const useStyles = makeStyles({
  description: {
    marginBottom: '2em',
  },
  item: {
    textAlign: 'center',
  },
});

function About() {
  const classes = useStyles();

  return (
    <Section id="about" title="About">
      <Typography className={classes.description}>
        <Box component="span" fontStyle="italic">
          I am a software engineer specialized in web development. I consider
          myself a person who can easily adapt to a team. I am open to discuss
          in detail the technological aspects of every implementation, always
          looking for the best solutions and analyzing the pros and cons. I am a
          self-taught person, but also open to learn from others and to share my
          knowledge. I lived in France for two years, and now I am working in
          Dynatrace, Barcelona.
        </Box>
      </Typography>

      <Grid container spacing={4} className={classes.gridContainer}>
        <Grid item xs={6} md={3} className={classes.item}>
          <img
            src="images/about/development.svg"
            height="100px"
            alt="Web development"
          />
          <Typography>Web developer</Typography>
        </Grid>

        <Grid item xs={6} md={3} className={classes.item}>
          <img src="images/about/team.svg" height="100px" alt="Team" />
          <Typography>Team worker</Typography>
        </Grid>

        <Grid item xs={6} md={3} className={classes.item}>
          <img src="images/about/learning.svg" height="100px" alt="Learning" />
          <Typography>Always learning</Typography>
        </Grid>

        <Grid item xs={6} md={3} className={classes.item}>
          <img
            src="images/about/sagrada-familia.svg"
            height="100px"
            alt="Barcelona"
          />
          <Typography>Working in Barcelona</Typography>
        </Grid>
      </Grid>
    </Section>
  );
}

export default About;
