import { SiAngular, SiJava, SiPython } from 'react-icons/si';

const mainIconSize = '80px';

export const skillsItems = [
  {
    name: 'Angular',
    icon: <SiAngular title="Angular" size={mainIconSize} />,
    description:
      'Recent experience in Front End, mainly Angular 2+, for projects with different purposes and sectors.',
    companies: ['Dynatrace', 'Schneider Electric', 'MANE', 'Alten'],
  },
  {
    name: 'Java',
    icon: <SiJava title="Java" size={mainIconSize} />,
    description:
      'Long experience in Java 8 for Back End development. Use of several frameworks like JSP for creating the Front End side of web applications.',
    companies: ['Dynatrace', 'Everis'],
  },
  {
    name: 'Python',
    icon: <SiPython title="Python" size={mainIconSize} />,
    description:
      'Back End development in Python and Django, as well as for Machine Learning projects.',
    companies: ['MANE', 'Alten'],
  },
];
