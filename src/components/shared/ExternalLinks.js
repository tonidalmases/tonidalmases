import React from 'react';
import { Box } from '@material-ui/core';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function ExternalLinks({ size }) {
  return (
    <Box display="flex" gridColumnGap="1em">
      <a
        title="LinkedIn"
        href="https://linkedin.com/in/tonidalmases"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin color="white" size={size} />
      </a>

      <a
        title="Github"
        href="https://github.com/tonidalmases"
        target="_blank"
        rel="noreferrer"
      >
        <FaGithub color="white" size={size} />
      </a>
    </Box>
  );
}

export default ExternalLinks;
