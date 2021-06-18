import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  section: {
    paddingBottom: '6em',
  },
  title: {
    marginBottom: '1em',
    top: '2em',
    position: 'relative',
  },
  children: {
    top: '4em',
    position: 'relative',
  },
});

function Section({ id, title, children }) {
  const classes = useStyles();

  return (
    <section id={id} className={classes.section}>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>

      <div className={classes.children}>{children}</div>
    </section>
  );
}

export default Section;
