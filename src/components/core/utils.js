import ExperienceItem from "../shared/ExperienceItem";
import {Divider} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const experiencesUseStyles = makeStyles({
  paddingBottom: {
    paddingBottom: '1em',
  },
  paddingTop: {
    paddingTop: '1em',
  }
});

const getClasses = (index, total) => {
  if (index === 0 && total === 1) {
    return [];
  }

  const experiencesClasses = experiencesUseStyles();
  let classes = [];
  if (index !== 0) {
    classes.push(experiencesClasses.paddingTop);
  }
  if (index < total - 1) {
    classes.push(experiencesClasses.paddingBottom);
  }
  return classes;
};

export const renderExperiences = (experiences) => {
  return experiences
    .map((experience, index) => {
      return (
        <div>
          <ExperienceItem
            key={index}
            experience={experience}
            className={getClasses(index, experiences.length).join(' ')}>
          </ExperienceItem>
          {index < experiences.length - 1 && <Divider/>}
        </div>
      )
    });
};
