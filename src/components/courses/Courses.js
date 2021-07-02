import React from 'react';
import { Grid } from '@material-ui/core';
import Section from '../shared/Section';
import CourseItem from './CourseItem';
import { coursesItems } from './courses-items';
import { getElementBottomPosition } from '../../utils/utils';

function Courses() {
  const renderCourses = coursesItems.map((course, index) => (
    <Grid key={index} item sm={6} md={4}>
      <CourseItem key={index} course={course} />
    </Grid>
  ));

  return (
    <div
      ref={(cont) => console.log('course div', getElementBottomPosition(cont))}
    >
      <Section
        ref={(cont) =>
          console.log('courses sec', getElementBottomPosition(cont))
        }
        id="courses"
        title="Courses"
      >
        <Grid container spacing={3}>
          {renderCourses}
        </Grid>
      </Section>
    </div>
  );
}

export default Courses;
