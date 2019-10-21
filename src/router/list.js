import BottomTabNavigator from '../components/BottomTabNavigator/BottomTabNavigator';
import Github from '../views/Github/Github';
import Setting from '../views/Setting/Setting';
import NotFound from '../views/NotFound/NotFound';

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/dashboard/github'
  },
  {
    path: '/dashboard',
    component: BottomTabNavigator,
    routes: [
      {
        path: '/dashboard/github',
        component: Github
      },
      {
        path: '/dashboard/setting',
        component: Setting
      }
    ]
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
