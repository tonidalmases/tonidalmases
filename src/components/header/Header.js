import React, { useState } from 'react';
import {
  makeStyles,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Drawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { HashLink } from 'react-router-hash-link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const useStyles = makeStyles({
  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  titleContainer: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    columnGap: '20px',
  },
  titleLinksContainer: {
    paddingTop: '6px',
    display: 'flex',
    columnGap: '10px',
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
  },
  colorWhite: {
    color: 'white',
  },
  colorBlack: {
    color: 'black',
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
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const linkItems = (colorClass) => {
    return navLinks.map(({ title, to }, index) => (
      <HashLink
        key={index}
        to={to}
        className={`${classes.linkText} ${colorClass}`}
        smooth
        onClick={() => setDrawerOpen(false)}
      >
        <ListItem button>
          <ListItemText primary={title} />
        </ListItem>
      </HashLink>
    ));
  };

  return (
    <header>
      <AppBar position="fixed">
        <Toolbar>
          <div className={classes.titleContainer}>
            <Typography variant="h5">Toni Dalmases</Typography>

            <div className={classes.titleLinksContainer}>
              <a
                title="LinkedIn"
                href="https://linkedin.com/in/tonidalmases"
                className={classes.colorWhite}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size="30px" />
              </a>
              <a
                title="Github"
                href="https://github.com/tonidalmases"
                className={classes.colorWhite}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size="30px" />
              </a>
            </div>
          </div>

          {!smallScreen && (
            <List component="nav" className={classes.navDisplayFlex}>
              {linkItems(classes.colorWhite)}
            </List>
          )}

          {smallScreen && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => setDrawerOpen(true)}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {smallScreen && (
        <Drawer
          anchor="top"
          open={isDrawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <List>{linkItems(classes.colorBlack)}</List>
        </Drawer>
      )}
    </header>
  );
}

export default Header;
