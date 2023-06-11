import React from 'react';
import DashBoard from '../pages/DashBoard';
import AboutMe from '../pages/AboutMe';
import Projects from '../pages/Projects';

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
    ],
  },
];

export default routes;
