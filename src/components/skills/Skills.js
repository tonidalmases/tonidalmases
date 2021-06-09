import React from "react";
import SkillCard from "./SkillCard";
import {makeStyles} from "@material-ui/core/styles";
import {SiAngular, SiJava, SiPython} from "react-icons/si";
import Section from "../shared/Section";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {Typography} from "@material-ui/core";
import {skillIcons} from "./skill-icons";
import SkillIcon from "./SkillIcon";

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
  }
});

function Skills() {
  const classes = useStyles();
  const mainIconSize = '80px';

  const skills = [
    {
      name: 'Angular',
      icon: <SiAngular title="Angular" size={mainIconSize}/>,
      description: 'Recent experience in Front End, mainly Angular 2+, for projects with different purposes and sectors.',
      companies: ['Dynatrace', 'Schneider Electric', 'MANE', 'Alten'],
      others: ['rxjs', 'ngrx', 'jasmine', 'jest', 'protractor'],
    },
    {
      name: 'Java',
      icon: <SiJava title="Java" size={mainIconSize}/>,
      description: 'Long experience in Java 8 for Back End development. Use of several frameworks like JSP for creating the Front End side of web applications.',
      companies: ['Dynatrace', 'Everis'],
      others: ['Spring Framework', 'Hibernate', 'Selenium', 'Gson'],
    },
    {
      name: 'Python',
      icon: <SiPython title="Python" size={mainIconSize}/>,
      description: 'Back End development in Python and Django, as well as for Machine Learning projects.',
      companies: ['MANE', 'Alten'],
      others: ['Django', 'django-rest-framework', 'Scikit-Learn', 'NumPy', 'Pandas'],
    }
  ];

  const renderSkills = skills
    .map((skill, index) => <SkillCard key={index} skill={skill}/>);

  const renderSkillIcons = skillIcons
    .map((skill, index) => <SkillIcon key={index} skill={skill}/>);

  return (
    <Section id="skills" title="Skills">
      <div className={classes.cards}>
        <div className={classes.mainSkillsCards}>
          {renderSkills}
        </div>

        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Some technologies I've used...
            </Typography>

            <div className={classes.skillIcons}>
              {renderSkillIcons}
            </div>
          </CardContent>
        </Card>
      </div>
    </Section>
  );
}

export default Skills;
