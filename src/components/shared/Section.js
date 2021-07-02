import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, Typography } from '@material-ui/core';
import { getElementTopPosition } from '../../utils/utils';
import { setSectionPosition } from '../../store/sections-slice';

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
  const sectionRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setSectionPosition({
        id,
        position: getElementTopPosition(sectionRef.current),
      })
    );
  }, [sectionRef]);

  const classes = useStyles();

  return (
    <section ref={sectionRef} id={id} className={classes.section}>
      <Typography variant="h4" className={classes.title}>
        {title}
      </Typography>

      <div className={classes.children}>{children}</div>
    </section>
  );
}

export default Section;
