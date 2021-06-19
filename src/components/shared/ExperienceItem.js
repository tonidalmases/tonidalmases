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
  detailsContainer: {
    marginBottom: '8px',
  },
  details: {
    display: 'flex',
    columnGap: '8px',
    alignItems: 'center',
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

        <div className={classes.detailsContainer}>
          <Typography className={classes.details}>
            <IoCalendar /> {experience.date}
          </Typography>

          {!!experience.university && (
            <Typography className={classes.details}>
              <IoSchool /> {experience.university}
            </Typography>
          )}

          {!!experience.company && (
            <Typography className={classes.details}>
              <IoBriefcase /> {experience.company}
            </Typography>
          )}

          <Typography className={classes.details}>
            <IoLocationSharp /> {experience.location}
          </Typography>
        </div>

        <Typography>{experience.description}</Typography>
      </Grid>
    </Grid>
  );
}

export default ExperienceItem;
