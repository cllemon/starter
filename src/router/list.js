
import React from 'react';
import loadable from '@loadable/component';

const Github = import(/* webpackChunkName: "github" */ '@/views/Github/Github.js');
const Setting = import(/* webpackChunkName: "setting" */ '@/views/Setting/Setting.js');

const AsyncComponent = (loader) => loadable(loader, { fallback: <h3>Loading...</h3> });

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/github'
  },
  {
    path: '/github',
    component: AsyncComponent(() => Github)
  },
  {
    path: '/setting',
    component: AsyncComponent(() => Setting)
  }
];

export default routes;
