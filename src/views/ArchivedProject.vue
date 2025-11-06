<template>
  <div id="archived-project-view">
    <section class="archived-section">
      <div class="container d-flex h-100 align-items-center">
        <div class="mx-auto text-center">
          <h1 class="mx-auto mb-3">
            <a href="/" class="name-link">Akash Ghose</a>
          </h1>
          <h2 class="text-white-50 mx-auto mb-4">
            {{ project ? project.title : 'Project Not Found' }}
          </h2>
          <template v-if="project">
            <div class="archived-message">
              <p class="text-white-50 mb-4">
                This project is archived and no longer actively hosted online.
              </p>
              <a :href="project.github_url" class="btn btn-primary mb-4" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github"></i>
                View Source Code on GitHub
              </a>
            </div>
            <div>
              <a href="/#projects" class="back-home-link">
                <i class="fas fa-arrow-left"></i> Back to Projects
              </a>
            </div>
          </template>
          <template v-else>
            <router-link to="/" class="btn btn-primary mt-4">
              Go back to Projects
            </router-link>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped src='../css/home-styles.css'>
</style>

<style scoped src='../css/archived-project-styles.css'>
</style>

<script>
export default {
  name: 'ArchivedProject',
  data () {
    return {
      projects: {
        glassdoor: {
          img_name: 'glassdoor-mining-app.png',
          img_left: false,
          title: 'Glassdoor Mining Project',
          description: 'I have collected data from 2000 Glassdoor job posting regarding Data Scientists. I have cleaned, processed and analyzed that data, and afterwards, I applied machine learning algorithms on that data to build a data product that can estimate a salary, given certain variables.',
          github_url: 'https://github.com/aghose/glassdoor_mining_proj'
        },
        blm: {
          img_name: 'blm.png',
          img_left: true,
          title: 'BLM Data Science Term Project',
          description: 'I collected data from multiple .gov sources with ambitions of using the data to point out existence of/lack of racial bias in our institutions. I used R and DplyR methods to clean and analyze the datasets and ggplot2 to graph them. Using these tools, I was able to show that mortgage loan applicants that were made by black people were more likely to get rejected than their white counterparts. I also utilized linear regression to build a model that could predict an applicant\'s income given certain factors.',
          github_url: 'https://github.com/aghose/EAS_345_term_project'
        },
        fullstack: {
          img_name: 'vue-express-fullstack.png',
          img_left: false,
          title: 'Vue.js Express Fullstack Project',
          description: 'A fullstack web application built with Vue.js on the frontend and Express.js on the backend, demonstrating modern JavaScript development practices and RESTful API design.',
          github_url: 'https://github.com/aghose/fullstack_vue_express'
        }
      }
    }
  },
  computed: {
    project () {
      const projectId = this.$route.params.id
      return this.projects[projectId] || null
    }
  }
}
</script>
