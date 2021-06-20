import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { IoCalendar, IoSchool, IoTime } from 'react-icons/io5';
import ExperienceDetails from '../shared/ExperienceDetails';

const useStyles = makeStyles({
  header: {
    display: 'grid',
    gridTemplateColumns: 'auto 60px',
    gridColumnGap: '10px',
    marginBottom: '8px',
  },
  linksContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    minWidth: '60px',
    paddingTop: '8px',
  },
  link: {
    height: 'min-content',
    color: 'black',
  },
});

function CourseItem({ course }) {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.header}>
        <Typography variant="h6">{course.name}</Typography>

        <div className={classes.linksContainer}>
          <a
            href={course.link}
            className={classes.link}
            target="_blank"
            rel="noreferrer"
            title="Link to course"
          >
            <FaExternalLinkAlt size="20px" />
          </a>
          {!!course.github && (
            <a
              href={course.github}
              className={classes.link}
              target="_blank"
              rel="noreferrer"
              title="Github project"
            >
              <FaGithub size="20px" />
            </a>
          )}
        </div>
      </div>

      <ExperienceDetails
        date={course.date}
        school={course.platform}
        time={course.time}
      />

      <Typography>{course.description}</Typography>
    </div>
  );
}

export default CourseItem;
