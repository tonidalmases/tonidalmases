import React from 'react';
import Section from '../shared/Section';
import { renderExperiences } from '../shared/experiences-utils';
import { careerItems } from './career-items';

function Career() {
  return (
    <Section id="career" title="Career">
      {renderExperiences(careerItems)}
    </Section>
  );
}

export default Career;
