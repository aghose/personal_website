<!--
  Particles.vue - Interactive Particles Animation View

  This view displays an interactive particles animation effect inspired by particles.js.
  Particles move across the canvas and connect when close together, creating a network effect.
  They react to mouse movement, moving away from the cursor.

  The animation logic is implemented in services/particles.js and initializes when the component mounts.
-->

<template>
  <div>
    <!-- Canvas element where particles are drawn -->
    <canvas id="canvas1"></canvas>
  </div>
</template>

<style scoped>
/* Full-screen canvas styling */
#canvas1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
}
</style>

<script>
import particles from '../services/particles'

export default {
  name: 'Particles',
  components: {},
  mounted () {
    // Initialize particles animation after component is mounted to DOM
    particles()
  }
}
</script>
