import React from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {Container} from "@material-ui/core";

const useStyles = makeStyles({
  section: {
    paddingBottom: '6em',
  },
  title: {
    marginBottom: '1em',
  }
});

function Section({id, title, children}) {
  const classes = useStyles();

  return (
    <section id={id} className={classes.section}>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>

      <Container>
        {children}
      </Container>
    </section>
  )
}

export default Section;
