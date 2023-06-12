import React from 'react';
import DashBoard from '../pages/DashBoard';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';
import Tecnologies from '../pages/Tecnologies';

const routes = [
  {
    path: '/',
    element: <DashBoard />,
    children: [
      {
        path: 'about-me',
        element: <AboutMe />,
      },
      {
        path: 'Projects',
        element: <Projects />,
      },
      {
        path: 'tecnologies',
        element: <Tecnologies />,
      },
    ],
  },
];

export default routes;
