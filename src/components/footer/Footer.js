import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  toolbar: {
    display: 'flex',
    justifyContent: 'center',
  },
});

function Footer() {
  const classes = useStyles();
  const year = new Date().getFullYear();

  return (
    <AppBar component="footer" position="static">
      <Toolbar variant="dense" className={classes.toolbar}>
        <Typography>{year} &copy; Toni Dalmases</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
