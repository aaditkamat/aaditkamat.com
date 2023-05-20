import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/about-me/',
    component: ComponentCreator('/about-me/', '68c'),
    exact: true
  },
  {
    path: '/bookmarks',
    component: ComponentCreator('/bookmarks', '1a8'),
    exact: true
  },
  {
    path: '/calendar/',
    component: ComponentCreator('/calendar/', '7fc'),
    exact: true
  },
  {
    path: '/podcasts',
    component: ComponentCreator('/podcasts', 'c5b'),
    exact: true
  },
  {
    path: '/projects',
    component: ComponentCreator('/projects', 'b29'),
    exact: true
  },
  {
    path: '/resume/',
    component: ComponentCreator('/resume/', 'b34'),
    exact: true
  },
  {
    path: '/tools',
    component: ComponentCreator('/tools', '6df'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '94b'),
    routes: [
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', '5ba'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '60e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
