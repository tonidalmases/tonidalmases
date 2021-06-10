import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { IoCalendar, IoLocationSharp, IoSchool } from 'react-icons/io5';

const useStyles = makeStyles({
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
    <div className={className}>
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

        <Typography className={classes.detailsItem}>
          <IoLocationSharp /> {experience.location}
        </Typography>
      </div>

      <Typography>{experience.description}</Typography>
    </div>
  );
}

export default ExperienceItem;
