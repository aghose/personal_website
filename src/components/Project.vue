<template>
  <div class="wrapper">

    <template v-if="img_left">
      <div class="projects-row">
        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
          <div class="col-lg-6">
            <img class="img-fluid" :src= "img_url" alt="" />
          </div>
          <div class="col-lg-6">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div
                  class="project-text w-100 my-auto text-center text-lg-left"
                >
                  <h4 class="text-white">
                    {{ title }}
                  </h4>
                  <p class="mb-0 text-white-50">
                    {{ description }}
                    dlkafjdlkaj;dlkafj {{img_url}}
                  </p>
                  <hr class="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-else>
      <div class="projects-row">
        <div class="row justify-content-center no-gutters">
          <div class="col-lg-6">
            <img class="img-fluid" :src= "img_url" alt="" />
          </div>
          <div class="col-lg-6 order-lg-first">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div
                  class="project-text w-100 my-auto text-center text-lg-right"
                >
                  <h4 class="text-white">{{ title }}</h4>
                  <p class="mb-0 text-white-50">
                    {{description}}
                  </p>
                  <hr class="d-none d-lg-block mb-0 mr-0" />
                </div>
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
    img_url: {
      type: String,
      default: '../assets/demo-image-02.jpg',
    },
    img_left: Boolean,
    title: String,
    description: String,
  },
};
</script>
