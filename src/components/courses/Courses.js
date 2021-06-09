import React from 'react';
import Section from "../shared/Section";
import CourseItem from "./CourseItem";
import {makeStyles} from "@material-ui/core/styles";
import {coursesItems} from "./courses-items";

const useStyles = makeStyles({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '40px',
  },
});

function Courses() {
  const classes = useStyles();

  const renderCourses = coursesItems
    .map((course, index) => <CourseItem key={index} course={course}/>);

  return (
    <Section id="courses" title="Courses">
      <div className={classes.container}>
        {renderCourses}
      </div>
    </Section>
  )
}

export default Courses;
