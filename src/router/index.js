import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Resume from '../views/Resume.vue';
import Particles from '../views/Particles.vue';
import TicTacToe from '../views/TicTacToe.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
  },
  {
    path: '/particles',
    name: 'Particles',
    component: Particles,
  },
  {
    path: '/tictactoe',
    name: 'TicTacToe',
    component: TicTacToe,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
