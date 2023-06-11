import React from 'react';
import DashBoard from '../pages/DashBoard';
import AboutMe from '../pages/AboutMe';

const routes = [
  {
    path: '/',
    element: <DashBoard />,
    children: [
      {
        path: 'about-me',
        element: <AboutMe />,
      },
    ],
  },
];

export default routes;
