import React from "react";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  skill: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 12,
  },
  companies: {
    marginBottom: 12,
    alignText: 'center',
  },
});

function SkillCard({skill}) {
  const classes = useStyles();

  return (
    <Card>
      <CardContent>
        <div className={classes.skill}>
          {skill.icon}
        </div>
        <Typography className={classes.companies} color="textSecondary" align="center">
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
