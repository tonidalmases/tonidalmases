import React from 'react';
import { Grid } from '@material-ui/core';
import Section from '../shared/Section';
import CourseItem from './CourseItem';
import { coursesItems } from './courses-items';

function Courses() {
  const renderCourses = coursesItems.map((course, index) => (
    <Grid key={index} item sm={6} md={4}>
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
