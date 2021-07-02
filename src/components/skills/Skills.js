import React from 'react';
import { makeStyles, Card, CardContent, Grid } from '@material-ui/core';
import Section from '../shared/Section';
import SkillCard from './SkillCard';
import SkillIcon from './SkillIcon';
import { skillsItems } from './skills-items';
import { skillsIcons } from './skills-icons';
import { getElementBottomPosition } from '../../utils/utils';

const useStyles = makeStyles({
  cardContent: {
    padding: '20px !important',
  },
  skillIcons: {
    textAlign: 'center',
  },
});

function Skills() {
  const classes = useStyles();

  const renderSkills = skillsItems.map((skill, index) => (
    <Grid key={index} item sm={4}>
      <SkillCard key={index} skill={skill} />
    </Grid>
  ));

  const renderSkillsIcons = skillsIcons.map((skill, index) => (
    <SkillIcon key={index} skill={skill} />
  ));

  return (
    <Section
      ref={(cont) => console.log('skills', getElementBottomPosition(cont))}
      id="skills"
      title="Skills"
    >
      <Grid container spacing={2}>
        {renderSkills}

        <Grid item>
          <Card>
            <CardContent className={classes.cardContent}>
              <div className={classes.skillIcons}>{renderSkillsIcons}</div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Skills;
