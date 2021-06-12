import { makeStyles } from '@material-ui/core';
import React from 'react';
import ExperienceItem from '../shared/ExperienceItem';
import Section from '../shared/Section';
import { educationItems } from './education-items';

const useStyles = makeStyles({
  marginBottom: {
    paddingBottom: '2em',
  },
});

function Education() {
  const classes = useStyles();

  const renderExperiences = educationItems.map((experience, index) => (
    <ExperienceItem
      key={index}
      experience={experience}
      className={index < educationItems.length - 1 && classes.marginBottom}
    ></ExperienceItem>
  ));

  return (
    <Section id="education" title="Education">
      {renderExperiences}
    </Section>
  );
}

export default Education;
