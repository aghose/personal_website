/**
 * router/index.js - Vue Router Configuration
 *
 * This file configures all routes for the personal website application.
 * It uses Vue Router 4 (compatible with Vue 3) to handle client-side navigation.
 *
 * Routes:
 * - / : Home page with about section, projects showcase, and contact info
 * - /resume : Professional resume page with work experience and education
 * - /particles : Interactive particles animation demo
 * - /tictactoe : Tic-tac-toe game implementation
 * - /archived/:id : Dynamic route for archived project pages
 *
 * The router uses HTML5 History mode for clean URLs without hash fragments.
 */

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Resume from '../views/Resume.vue'
import Particles from '../views/Particles.vue'
import TicTacToe from '../views/TicTacToe.vue'
import ArchivedProject from '../views/ArchivedProject.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // Example of lazy-loaded route (commented out):
  // {
  //   path: '/about',
  //   name: 'About',
  //   // Route level code-splitting
  //   // This generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/particles',
    name: 'Particles',
    component: Particles
  },
  {
    path: '/tictactoe',
    name: 'TicTacToe',
    component: TicTacToe
  },
  {
    // Dynamic route with parameter for archived project ID
    // Example: /archived/glassdoor, /archived/blm
    path: '/archived/:id',
    name: 'ArchivedProject',
    component: ArchivedProject
  }
]

// Create and configure the router instance
const router = createRouter({
  // Use HTML5 History mode for clean URLs (no hash fragments)
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
