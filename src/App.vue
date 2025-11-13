<!--
  App.vue - Root Component

  This is the main application component that serves as the entry point for the Vue application.
  It contains the router-view which dynamically renders the appropriate page component based on the current route.

  The component also imports global fonts and icon libraries used throughout the application.
-->

<template>
  <!-- Main application container -->
  <div id="app">
    <!-- Router view dynamically renders the current route's component -->
    <router-view/>
  </div>
</template>

<style>
/** Font Awesome icons (free version) - Provides icon library for UI elements */
@import url("https://use.fontawesome.com/releases/v5.15.1/js/all.js");

/** Google Fonts - Typography used throughout the application */
@import url("https://fonts.googleapis.com/css?family=Varela+Round");
@import url("https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i");
</style>
