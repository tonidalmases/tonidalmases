import React from 'react';
import Section from "../shared/Section";

const courses = [
  {
    name: 'Ethereum and Solidity: The Complete Developer\'s Guide',
    date: '2021',
    time: '24 hours',
    platform: 'Udemy',
    link: 'https://www.udemy.com/course/ethereum-and-solidity-the-complete-developers-guide/',
    github: 'https://github.com/tonidalmases/kickstart',
  },
  {
    name: 'The Complete 2020 Web Development Bootcamp',
    date: '2020',
    time: '54 hours',
    platform: 'Udemy',
    link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
    github: 'https://github.com/tonidalmases/keeper',
  },
  {
    name: 'The Complete Angular Course: Beginner to Advanced',
    date: '2020',
    time: '30 hours',
    platform: 'Udemy',
    link: 'https://www.udemy.com/course/the-complete-angular-master-class/',
    github: 'https://github.com/tonidalmases/e-shop',
  },
  {
    name: 'Hands on With Docker & Docker Compose From a Docker Captain',
    date: '2020',
    time: '5 hours',
    platform: 'Udemy',
    link: 'https://www.udemy.com/course/hands-on-with-docker-and-docker-compose/',
  },
  {
    name: 'Analyzing Data with Python',
    date: '2018',
    time: '15 hours',
    platform: 'edX',
    link: 'https://www.edx.org/course/analyzing-data-with-python',
  },
  {
    name: 'Bitcoin and Cryptocurrency Technologies',
    date: '2018',
    time: '50 hours',
    platform: 'Coursera',
    link: 'https://www.coursera.org/learn/cryptocurrency',
  },
  {
    name: 'Machine Learning',
    date: '2017',
    time: '50 hours',
    platform: 'Coursera',
    link: 'https://www.coursera.org/learn/machine-learning',
  },
]

function Courses() {
  return (
    <Section id="courses" title="Courses">
      {/*TODO*/}
    </Section>
  )
}

export default Courses;
