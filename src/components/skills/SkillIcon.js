import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  icon: {
    margin: '10px',
    width: '40px',
    fill: '#212121',
  },
});

function SkillIcon({ skill }) {
  const classes = useStyles();

  return (
    <svg
      className={classes.icon}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{skill.title}</title>
      <path d={skill.path} />
    </svg>
  );
}

export default SkillIcon;
