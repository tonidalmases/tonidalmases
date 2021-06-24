import React from 'react';
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Typography,
  Grid,
} from '@material-ui/core';
import ExternalLinks from '../shared/ExternalLinks';

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
  textBlock: (props) => ({
    position: 'absolute',
    paddingRight: '50%',
    color: 'white',
    left: '5%',
    top: props.xsScreen ? '15%' : '25%',
  }),
  title: (props) => ({
    fontSize: props.xsScreen ? '2rem' : '3rem',
  }),
  subtitle: (props) => ({
    fontSize: props.xsScreen ? '1rem' : '2rem',
  }),
});

function Introduction() {
  const theme = useTheme();
  const xsScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const classes = useStyles({ xsScreen });

  return (
    <div className={classes.container}>
      <img src="images/me/me.png" alt="me" width="100%" />
      <div className={classes.textBlock}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography className={classes.title}>Toni Dalmases</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.subtitle}>
              Software engineer
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <ExternalLinks size="40px" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Introduction;
