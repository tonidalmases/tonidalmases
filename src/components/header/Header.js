import React, { useEffect, useState } from 'react';
import {
  makeStyles,
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Grid,
  List,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollPosition from '../../utils/use-scroll-position';
import ExternalLinks from '../shared/ExternalLinks';
import HeaderLink from './HeaderLink';

const useStyles = makeStyles({
  header: (props) =>
    !props.isTitleDisplayed
      ? {
          backgroundColor: 'transparent',
          boxShadow: 'none',
        }
      : undefined,
  toolbar: (props) =>
    !props.isTitleDisplayed
      ? {
          justifyContent: props.isMenuIconDisplayed ? 'right' : 'center',
        }
      : undefined,
  linkItems: {
    display: 'flex',
    justifyContent: 'space-between',
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
  const theme = useTheme();
  const xsScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const smScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isTitleDisplayed, setTitleDisplayed] = useState(false);
  const [isMenuIconDisplayed, setMenuIconDisplayed] = useState(false);

  const classes = useStyles({ isTitleDisplayed, isMenuIconDisplayed });

  useScrollPosition((position) => {
    setTitleDisplayed(position.y > 500);
  }, 100);

  useEffect(() => {
    setMenuIconDisplayed(
      (!isTitleDisplayed && xsScreen) || (isTitleDisplayed && smScreen)
    );
  }, [isTitleDisplayed, xsScreen, smScreen]);

  const linkItems = (color) =>
    navLinks.map(({ title, to }, index) => (
      <HeaderLink
        key={index}
        title={title}
        to={to}
        color={color}
        onClick={() => setDrawerOpen(false)}
      ></HeaderLink>
    ));

  return (
    <>
      <AppBar component="header" position="fixed" className={classes.header}>
        <Toolbar className={classes.toolbar}>
          {isTitleDisplayed && (
            <Grid container spacing={2}>
              <Grid item>
                <Typography variant="h5">Toni Dalmases</Typography>
              </Grid>

              <Grid item>
                <ExternalLinks size="30px" />
              </Grid>
            </Grid>
          )}

          {!isMenuIconDisplayed && (
            <List component="nav" className={classes.linkItems}>
              {linkItems('white')}
            </List>
          )}

          {isMenuIconDisplayed && (
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

      {isMenuIconDisplayed && (
        <Drawer
          anchor="top"
          open={isDrawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <List>{linkItems('black')}</List>
        </Drawer>
      )}
    </>
  );
}

export default Header;
