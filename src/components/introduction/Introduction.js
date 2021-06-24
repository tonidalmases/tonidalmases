import React from 'react';
import { makeStyles, Typography, Grid, Box } from '@material-ui/core';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
  textBlock: {
    position: 'absolute',
    paddingRight: '50%',
    color: 'white',
    left: '5%',
    top: '30%',
  },
  link: {
    color: 'white',
  },
});

function Introduction() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <img src="images/me/me.png" alt="me" width="100%" />
      <div className={classes.textBlock}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h3">Toni Dalmases</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4">Software engineer</Typography>
          </Grid>

          <Grid item xs={12} className={classes.linksContainer}>
            <Box display="flex" gridColumnGap="1em">
              <a
                title="LinkedIn"
                href="https://linkedin.com/in/tonidalmases"
                className={classes.link}
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin size="40px" />
              </a>

              <a
                title="Github"
                href="https://github.com/tonidalmases"
                className={classes.link}
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub size="40px" />
              </a>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Introduction;
