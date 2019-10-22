import Github from '@/views/Github/Github';
import Setting from '@/views/Setting/Setting';

const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/github'
  },
  {
    path: '/github',
    component: Github
  },
  {
    path: '/setting',
    component: Setting
  }
];

export default routes;
