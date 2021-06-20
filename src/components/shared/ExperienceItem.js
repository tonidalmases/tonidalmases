import React from 'react';
import {
  makeStyles,
  useTheme,
  useMediaQuery,
  Typography,
  Grid,
} from '@material-ui/core';
import {
  IoCalendar,
  IoLocationSharp,
  IoSchool,
  IoBriefcase,
} from 'react-icons/io5';
import ExperienceDetails from './ExperienceDetails';

const useStyles = makeStyles({
  imgContainer: {
    width: '200px',
    display: 'flex',
    justifyContent: 'center',
  },
  img: {
    maxWidth: '100px',
    maxHeight: '100px',
    marginTop: '8px',
    height: 'min-content',
  },
});

function ExperienceItem({ experience, className }) {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <Grid container spacing={2} className={className}>
      {!smallScreen && (
        <Grid item className={classes.imgContainer}>
          <img
            src={experience.img}
            alt={experience.name}
            title={experience.university || experience.company}
            className={classes.img}
          />
        </Grid>
      )}

      <Grid item xs>
        <Typography variant="h6" gutterBottom={true}>
          {experience.name}
        </Typography>

        <ExperienceDetails
          date={experience.date}
          school={experience.university}
          company={experience.company}
          location={experience.location}
        />

        <Typography>{experience.description}</Typography>
      </Grid>
    </Grid>
  );
}

export default ExperienceItem;
