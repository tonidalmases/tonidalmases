import React from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {FaCity, FaRegCalendarAlt, FaUniversity} from "react-icons/fa";

const useStyles = makeStyles({
  header: {
    marginBottom: '8px',
  },
  headerItem: {
    display: 'flex',
    columnGap: '8px',
    alignItems: 'center',
  },
});

function ExperienceItem({experience, className}) {
  const classes = useStyles();

  return (
    <div className={className}>
      <Typography variant="h6" gutterBottom={true}>
        {experience.name}
      </Typography>

      <div className={classes.header}>
        <Typography className={classes.headerItem}>
          <FaRegCalendarAlt/> {experience.date}
        </Typography>

        {!!experience.university &&
        <Typography className={classes.headerItem}>
          <FaUniversity/> {experience.university}
        </Typography>
        }

        <Typography className={classes.headerItem}>
          <FaCity/> {experience.location}
        </Typography>
      </div>

      <Typography>
        {experience.description}
      </Typography>
    </div>
  )
}

export default ExperienceItem;
