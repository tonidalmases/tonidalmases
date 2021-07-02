import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Container,
  Box,
  Typography,
} from '@material-ui/core';
import ExternalLinks from '../shared/ExternalLinks';
import { setImageHeight } from '../../store/introduction-slice';
import { getElementHeight } from '../../utils/utils';

const useStyles = makeStyles({
  container: {
    position: 'relative',
  },
  textContainer: (props) => ({
    position: 'absolute',
    paddingRight: '40%',
    color: 'white',
    top: props.xsScreen ? '15%' : '25%',
  }),
  title: (props) => ({
    fontSize: props.xsScreen ? '2em' : '3em',
    marginBottom: props.xsScreen ? '4px' : '8px',
  }),
  subtitle: (props) => ({
    fontSize: props.xsScreen ? '1em' : '2em',
    marginBottom: props.xsScreen ? '10px' : '20px',
  }),
});

function Introduction() {
  const dispatch = useDispatch();

  const imgRef = useRef();
  useEffect(() => {
    dispatch(setImageHeight(getElementHeight(imgRef.current)));
  }, [imgRef]);

  const theme = useTheme();
  const xsScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const classes = useStyles({ xsScreen });

  return (
    <div className={classes.container}>
      <img ref={imgRef} src="images/me/me.png" alt="me" width="100%" />
      <Container className={classes.textContainer}>
        <Box display="flex" flexDirection="column">
          <Typography className={classes.title}>Toni Dalmases</Typography>
          <Typography className={classes.subtitle}>
            Software engineer
          </Typography>
          <ExternalLinks size={xsScreen ? '30px' : '40px'} />
        </Box>
      </Container>
    </div>
  );
}

export default Introduction;
