import React from 'react';
import { useTheme, useMediaQuery, Box } from '@material-ui/core';

function AboutItem({ icon, description, index }) {
  const theme = useTheme();
  const xsScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const iconLeft = index % 2 === 0;

  const iconItem = (
    <Box display="flex" alignItems="center" key={0}>
      <img src={icon} height={xsScreen ? '75px' : '100px'} alt="About" />
    </Box>
  );

  const descriptionItem = (
    <Box display="flex" alignItems="center" key={1}>
      <Box
        component="span"
        fontStyle="italic"
        textAlign={iconLeft ? 'left' : 'right'}
      >
        {description}
      </Box>
    </Box>
  );

  const items = [iconItem, descriptionItem];

  return (
    <Box display="grid" gridTemplateColumns="auto auto" gridColumnGap="2em">
      {iconLeft ? items : items.reverse()}
    </Box>
  );
}

export default AboutItem;
