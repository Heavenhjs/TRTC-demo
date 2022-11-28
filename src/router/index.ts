import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Index from '../views/Index.vue';
import Login from '../views/Login.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: Login,
  },
  {
    path: '/index',
    name: 'home',
    component: Index,
  },
  {
    path: '/invite',
    name: 'invite',
    component: () => import(/* webpackChunkName: "about" */ '../views/Invite.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
