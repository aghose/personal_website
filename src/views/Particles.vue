<template>
  <div>
    <canvas id="canvas1"></canvas>
  </div>
</template>

<style scoped>
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
import particles from '../services/particles';

export default {
  name: 'Particles',
  components: {},
  mounted() {
    particles();
  },
};
</script>
