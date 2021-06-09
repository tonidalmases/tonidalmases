import React from 'react';
import Typography from "@material-ui/core/Typography";
import {FaExternalLinkAlt, FaGithub} from "react-icons/fa";
import {IoCalendar, IoSchool, IoTime} from "react-icons/io5";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    display: 'grid',
    gridTemplateColumns: 'auto 60px',
    gridColumnGap: '10px',
    marginBottom: '8px',
  },
  links: {
    display: 'flex',
    justifyContent: 'space-around',
    minWidth: '60px',
    paddingTop: '8px',
  },
  link: {
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

function CourseItem({course}) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        <Typography variant="h6">
          {course.name}
        </Typography>

        <div className={classes.links}>
          <a href={course.link} target="_blank" className={classes.link}><FaExternalLinkAlt size="20px"/></a>
          {!!course.github && <a href={course.github} target="_blank" className={classes.link}><FaGithub size="20px"/></a>}
        </div>
      </div>

      <div className={classes.details}>
        <Typography className={classes.detailsItem}>
          <IoCalendar/> {course.date}
        </Typography>

        <Typography className={classes.detailsItem}>
          <IoSchool/> {course.platform}
        </Typography>

        <Typography className={classes.detailsItem}>
          <IoTime/> {course.time}
        </Typography>
      </div>

      <Typography>
        {course.description}
      </Typography>
    </div>
  )
}

export default CourseItem;
