<template>
  <div class="wrapper">

    <template v-if="img_left">
      <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
        <div class="col-lg-6">
          <img class="img-fluid" src="../assets/demo-image-01.jpg" alt="" />
        </div>
        <div class="col-lg-6">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-left">
                <h4 class="text-white">
                  FullStack WebApp using Vue and Express
                </h4>
                <p class="mb-0 text-white-50">
                  A simple fullstack app I made to introduce me to Vue.
                </p>
                <hr class="d-none d-lg-block mb-0 ml-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="row justify-content-center no-gutters">
        <div class="col-lg-6">
          <img class="img-fluid" src="../assets/demo-image-02.jpg" alt="" />
        </div>
        <div class="col-lg-6 order-lg-first">
          <div class="bg-black text-center h-100 project">
            <div class="d-flex h-100">
              <div class="project-text w-100 my-auto text-center text-lg-right">
                <h4 class="text-white">Particles effect</h4>
                <p class="mb-0 text-white-50">
                  A fun project I did to further my understanding of JavaScript
                </p>
                <hr class="d-none d-lg-block mb-0 mr-0" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped src='../css/home-styles.css'>
</style>

<script>
export default {
  name: 'Project',
  props: {
    img: {
      type: String,
      default: '../assets/demo-image-02.jpg',
    },
    img_left: Boolean,
    title: String,
    description: String,
  },
};
</script>
