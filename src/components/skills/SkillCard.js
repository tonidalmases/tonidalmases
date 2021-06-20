import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    height: '100%',
  },
  cardContent: {
    padding: '24px !important',
  },
  skill: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 15,
  },
  companies: {
    alignText: 'center',
    marginBottom: 12,
  },
});

function SkillCard({ skill }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <div className={classes.skill}>{skill.icon}</div>
        <Typography
          className={classes.companies}
          color="textSecondary"
          align="center"
        >
          {skill.companies.join(' • ')}
        </Typography>
        <Typography variant="body2" component="p">
          {skill.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SkillCard;
