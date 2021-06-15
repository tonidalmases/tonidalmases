import React from 'react';
import SkillCard from './SkillCard';
import { makeStyles } from '@material-ui/core/styles';
import Section from '../shared/Section';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Grid, Typography } from '@material-ui/core';
import { skillsIcons } from './skills-icons';
import SkillIcon from './SkillIcon';
import { skillsItems } from './skills-items';

const useStyles = makeStyles({
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
    <Section id="skills" title="Skills">
      <Grid container spacing={3}>
        {renderSkills}

        <Grid item>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Some technologies I've used...
              </Typography>

              <div className={classes.skillIcons}>{renderSkillsIcons}</div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Section>
  );
}

export default Skills;
