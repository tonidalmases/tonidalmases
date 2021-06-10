import React from 'react';
import SkillCard from './SkillCard';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../shared/Section';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Typography } from '@material-ui/core';
import { skillsIcons } from './skills-icons';
import SkillIcon from './SkillIcon';
import { skillsItems } from './skills-items';

const useStyles = makeStyles({
  cards: {
    display: 'grid',
    gridTemplateRows: 'auto auto',
    gridRowGap: '1em',
  },
  mainSkillsCards: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridColumnGap: '1em',
  },
  skillIcons: {
    textAlign: 'center',
  },
});

function Skills() {
  const classes = useStyles();

  const renderSkills = skillsItems.map((skill, index) => (
    <SkillCard key={index} skill={skill} />
  ));

  const renderSkillsIcons = skillsIcons.map((skill, index) => (
    <SkillIcon key={index} skill={skill} />
  ));

  return (
    <Section id="skills" title="Skills">
      <div className={classes.cards}>
        <div className={classes.mainSkillsCards}>{renderSkills}</div>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Some technologies I've used...
            </Typography>

            <div className={classes.skillIcons}>{renderSkillsIcons}</div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

export default Skills;
