import React from 'react';
import loadable from '@loadable/component';
import Loading from '@/components/Loading/Loading';

const BottomTabNavigator = import(
  /* webpackChunkName: "bottom-tab-navigator" */ '@/components/BottomTabNavigator/BottomTabNavigator'
);
const Github = import(/* webpackChunkName: "github" */ '@/views/Github/Github');
const Setting = import(
  /* webpackChunkName: "setting" */ '@/views/Setting/Setting'
);
const Empty = import(
  /* webpackChunkName: 'not-found' */ '@/components/Empty/Empty'
);

const AsyncComponent = loader => loadable(loader, { fallback: <Loading /> });

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/dashboard/github',
  },
  {
    path: '/dashboard',
    component: AsyncComponent(() => BottomTabNavigator),
    routes: [
      {
        path: '/dashboard/github',
        component: AsyncComponent(() => Github),
      },
      {
        path: '/dashboard/setting',
        component: AsyncComponent(() => Setting),
      },
    ],
  },
  {
    path: '*',
    component: AsyncComponent(() => Empty),
  },
];

export default routes;
