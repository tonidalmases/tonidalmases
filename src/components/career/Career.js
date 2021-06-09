import React from 'react';
import {renderExperiences} from "../core/utils";
import Section from "../shared/Section";
import {careerItems} from "./career-items";

function Career() {
  return (
    <Section id="career" title="Career">
      {renderExperiences(careerItems)}
    </Section>
  )
}

export default Career;
