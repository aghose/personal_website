/**
 * main.js - Application Entry Point
 *
 * This file initializes and configures the Vue 3 application.
 * It sets up the root Vue instance with necessary plugins and mounts it to the DOM.
 *
 * Dependencies:
 * - Vue 3: Core framework
 * - Bootstrap: CSS framework for responsive design
 * - Vue Router: Client-side routing
 * - LoadScript: Plugin for dynamically loading external scripts
 */

import { createApp } from 'vue'
import 'bootstrap' // Import Bootstrap CSS framework
import App from './App.vue' // Root application component
import router from './router' // Vue Router configuration
import LoadScript from 'vue-plugin-load-script' // Dynamic script loading plugin

// Create the Vue application instance
createApp(App)
  .use(router) // Enable Vue Router for navigation
  .use(LoadScript) // Enable dynamic script loading (used for loading external scripts in components)
  .mount('#app') // Mount the application to the DOM element with id="app"
