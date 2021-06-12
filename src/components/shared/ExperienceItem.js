import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {
  IoCalendar,
  IoLocationSharp,
  IoSchool,
  IoBriefcase,
} from 'react-icons/io5';
import { Grid } from '@material-ui/core';

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
  details: {
    marginBottom: '8px',
  },
  detailsItem: {
    display: 'flex',
    columnGap: '8px',
    alignItems: 'center',
  },
});

function ExperienceItem({ experience, className }) {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={className}>
      <Grid item className={classes.imgContainer}>
        <img
          src={experience.img}
          alt={experience.name}
          title={experience.university || experience.company}
          className={classes.img}
        />
      </Grid>

      <Grid item xs>
        <Typography variant="h6" gutterBottom={true}>
          {experience.name}
        </Typography>

        <div className={classes.details}>
          <Typography className={classes.detailsItem}>
            <IoCalendar /> {experience.date}
          </Typography>

          {!!experience.university && (
            <Typography className={classes.detailsItem}>
              <IoSchool /> {experience.university}
            </Typography>
          )}

          {!!experience.company && (
            <Typography className={classes.detailsItem}>
              <IoBriefcase /> {experience.company}
            </Typography>
          )}

          <Typography className={classes.detailsItem}>
            <IoLocationSharp /> {experience.location}
          </Typography>
        </div>

        <Typography>{experience.description}</Typography>
      </Grid>
    </Grid>
  );
}

export default ExperienceItem;
