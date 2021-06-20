import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';
import {
  IoCalendar,
  IoSchool,
  IoBriefcase,
  IoTime,
  IoLocationSharp,
} from 'react-icons/io5';

const useStyles = makeStyles({
  detailsContainer: {
    marginBottom: '8px',
  },
  details: {
    display: 'grid',
    gridTemplateColumns: '24px auto',
    alignItems: 'center',
  },
});

function ExperienceDetails({ date, time, school, company, location }) {
  const classes = useStyles();

  return (
    <div className={classes.detailsContainer}>
      {!!date && (
        <Typography className={classes.details}>
          <IoCalendar /> {date}
        </Typography>
      )}

      {!!school && (
        <Typography className={classes.details}>
          <IoSchool /> {school}
        </Typography>
      )}

      {!!company && (
        <Typography className={classes.details}>
          <IoBriefcase /> {company}
        </Typography>
      )}

      {!!time && (
        <Typography className={classes.details}>
          <IoTime /> {time}
        </Typography>
      )}

      {!!location && (
        <Typography className={classes.details}>
          <IoLocationSharp /> {location}
        </Typography>
      )}
    </div>
  );
}

export default ExperienceDetails;
