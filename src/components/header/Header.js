import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    flexGrow: 1,
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'white',
  },
});

const navLinks = [
  { title: 'About', to: '#about' },
  { title: 'Skills', to: '#skills' },
  { title: 'Career', to: '#career' },
  { title: 'Education', to: '#education' },
  { title: 'Courses', to: '#courses' },
];

function Header() {
  const classes = useStyles();

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [isSidebarOpen, setSidebarOpen] = useState(!smallScreen);

  useEffect(() => {
    setSidebarOpen(!smallScreen);
  }, [smallScreen]);

  const handleToggleSidebar = (open) => {
    console.log('hey open');
    setSidebarOpen(open);
  };

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => handleToggleSidebar(true)}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h4" className={classes.title}>
            Toni Dalmases
          </Typography>

          <List component="nav" className={classes.navDisplayFlex}>
            {navLinks.map(({ title, to }, index) => (
              <HashLink key={index} to={to} className={classes.linkText} smooth>
                <ListItem button>
                  <ListItemText primary={title} />
                </ListItem>
              </HashLink>
            ))}
          </List>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
