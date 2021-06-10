import React from 'react';
import Section from '../shared/Section';
import { renderExperiences } from '../shared/experiences-utils';
import { educationItems } from './education-items';

function Education() {
  return (
    <Section id="education" title="Education">
      {renderExperiences(educationItems)}
    </Section>
  );
}

export default Education;
