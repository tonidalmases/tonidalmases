import React, { forwardRef } from 'react';
import { makeStyles, Typography } from '@material-ui/core';

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

const Section = forwardRef(({ id, title, children }, ref) => {
  const classes = useStyles();

  return (
    <section ref={ref} id={id} className={classes.section}>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>

      <div className={classes.children}>{children}</div>
    </section>
  );
});

export default Section;
