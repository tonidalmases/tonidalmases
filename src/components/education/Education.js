import React from 'react';
import {renderExperiences} from "../core/utils";
import Section from "../shared/Section";
import {educationItems} from "./education-items";

function Education() {
  return (
    <Section id="education" title="Education">
      {renderExperiences(educationItems)}
    </Section>
  )
}

export default Education;
