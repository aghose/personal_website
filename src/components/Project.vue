<!--
  Project.vue - Reusable Project Display Component

  This component displays a project card with an image and description.
  It supports alternating left/right layouts for visual variety on the home page.

  Props:
  - img_name: Filename of the project image (stored in assets folder)
  - img_url: URL of the image (currently unused)
  - img_left: Boolean to determine if image should be on left (true) or right (false)
  - title: Project title/name
  - description: Project description text
  - link_url: URL to navigate when clicking the project title

  Layout:
  - When img_left=true: Image on left, text on right
  - When img_left=false: Image on right, text on left (order-lg-first reverses order on desktop)
-->

<template>
  <div class="wrapper">
    <!-- Layout variant 1: Image on left side -->
    <template v-if="img_left">
      <div class="projects-row">
        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
          <!-- Project image container (left side) -->
          <div class="col-lg-6 img-container">
            <img
              class="img-fluid"
              :src="require(`@/assets/${img_name}`)"
              alt=""
            />
          </div>
          <!-- Project description container (right side) -->
          <div class="col-lg-6">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div
                  class="project-text w-100 my-auto text-center text-lg-left"
                >
                  <a :href="link_url">
                    <h4 class="text-white">
                      {{ title }}
                    </h4>
                  </a>
                  <div class="description">
                    <p class="mb-0 text-white-50">
                      {{ description }}
                    </p>
                  </div>
                  <hr class="d-none d-lg-block mb-0 ml-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <!-- Layout variant 2: Image on right side -->
    <template v-else>
      <div class="projects-row">
        <div class="row justify-content-center no-gutters">
          <!-- Project image container (right side on desktop) -->
          <div class="col-lg-6">
            <img
              class="img-fluid"
              :src="require(`@/assets/${img_name}`)"
              alt=""
            />
          </div>
          <!-- Project description container (left side on desktop, order-lg-first places it before image) -->
          <div class="col-lg-6 order-lg-first">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div
                  class="project-text w-100 my-auto text-center text-lg-right"
                >
                  <a :href="link_url">
                    <h4 class="text-white">
                      {{ title }}
                    </h4>
                  </a>
                  <div class="description">
                    <p class="mb-0 text-white-50">
                      {{ description }}
                    </p>
                  </div>
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

<style scoped>
/* Optional: Background image approach (currently not used)
.img-container{
    background-image: url("var(--img_url)");
  } */
</style>

<script>
export default {
  name: 'Project',
  props: {
    img_name: String, // Image filename from assets folder
    img_url: String, // Image URL (not currently used)
    img_left: Boolean, // Layout direction: true = image left, false = image right
    title: String, // Project title
    description: String, // Project description
    link_url: String // Link to project page or external URL
  }
}
</script>
