import React from 'react';
import { makeStyles, ListItem, ListItemText } from '@material-ui/core';
import { HashLink } from 'react-router-hash-link';

const useStyles = makeStyles({
  link: {
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
});

function HeaderLink({ title, to, color, onClick }) {
  const classes = useStyles();

  return (
    <HashLink
      to={to}
      className={classes.link}
      style={{ color }}
      smooth
      onClick={() => onClick()}
    >
      <ListItem button>
        <ListItemText primary={title} />
      </ListItem>
    </HashLink>
  );
}

export default HeaderLink;
