import { SiAngular, SiJava, SiPython } from 'react-icons/si';

const mainIconSize = '80px';

export const skillsItems = [
  {
    name: 'Angular',
    icon: <SiAngular title="Angular" size={mainIconSize} />,
    description:
      'Front End experience in Angular 2+, together with well-known frameworks and libraries like RxJS, NgRx, Jest and Angular Material.',
    companies: ['Dynatrace', 'Schneider Electric', 'MANE', 'Alten'],
  },
  {
    name: 'Java',
    icon: <SiJava title="Java" size={mainIconSize} />,
    description:
      'Long experience in Java 8 for Back End development. Use of Spring framework, Maven and Hibernate for the project structure and connection to the database.',
    companies: ['Dynatrace', 'Everis'],
  },
  {
    name: 'Python',
    icon: <SiPython title="Python" size={mainIconSize} />,
    description:
      'Back End development in Python and Django REST framework for creating APIs. Also using this language for Machine Learning projects.',
    companies: ['MANE', 'Alten'],
  },
];
