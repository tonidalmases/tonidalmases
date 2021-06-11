import React from 'react';
import Section from '../shared/Section';
import CourseItem from './CourseItem';
import { coursesItems } from './courses-items';
import { Grid } from '@material-ui/core';

function Courses() {
  const renderCourses = coursesItems.map((course, index) => (
    <Grid item sm={6} md={4}>
      <CourseItem key={index} course={course} />
    </Grid>
  ));

  return (
    <Section id="courses" title="Courses">
      <Grid container spacing={3}>
        {renderCourses}
      </Grid>
    </Section>
  );
}

export default Courses;
