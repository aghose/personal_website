<template>
  <div id="home-vue">
    <!-- Navigation-->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <a class="navbar-brand js-scroll-trigger" href="#page-top"
          >Akash Ghose</a
        >
        <button
          class="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#about">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#projects"
                >Projects</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#resume">Résumé</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Masthead-->
    <header id="page-top" class="masthead">
      <div class="container d-flex h-100 align-items-center">
        <div class="mx-auto text-center">
          <h1 class="mx-auto my-0 text-uppercase">hello</h1>
          <h2 class="text-white-50 mx-auto mt-2 mb-5">
            I am Akash Ghose. I am a recent University at Buffalo graduate.
          </h2>
          <a class="btn btn-primary js-scroll-trigger" href="#about"
            >Get To Know Me</a
          >
        </div>
      </div>
    </header>

    <!-- About-->
    <section class="about-section text-center" id="about">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <h2 class="text-white mb-4">
              <i class="fa fa-plane"></i>
              Early Life
            </h2>
            <p class="text-white-50">
              In 1996, I was born in Chittagong, Bangladesh. I spent a good part
              of my childhood in Buffalo, NY, and I am an American citizen.
            </p>
            <img
              class="img-bd-map"
              src="../assets/ctg_00.png"
              alt="Map of Bangladesh"
            />
            <h2 class="text-white mb-4">
              <i class="fa fa-graduation-cap" aria-hidden="true"></i>
              Education
            </h2>
            <p class="education text-white-50" id="zero">
              I attended UB from Fall of 2014 to Fall of 2020. I came into UB
              with an enthusiasm for Economics. I loved being able to connect
              the dots, finding the patterns, and learning about how things were
              all so interconnected! After taking an introductory course to
              Computer Science, however, I soon fell in love with it. My love
              for computer science led me to being an undergraduate TA in the
              CSE department for 6 semesters and an internship at FoodWeb.
              <br />
              <br />
              Data Science is the field where I hope to be able to combine my
              knack for connecting the dots and penchant for computer science
              and make a career out of it. <br />
              My favorite classes throughout my academic career, in no
              particular order, were:
            </p>
            <ul class="education text-white-50">
              <li>Eco 407: Intermediate Macroeconomics</li>
              <li>Eco 408: Special topics debate</li>
              <li>ART 320: Web Design</li>
              <li>EAS 345: Intro to Data Science</li>
              <li>CSE 498: Independent Study</li>
              <li>CSE 487: Distributed Systems</li>
            </ul>
            <p class="education text-white-50" id="one">
              If you wish to see my official résumé, it can be found
              <a href="/resume"> here</a>.
            </p>

            <div class="personal-life">
              <h2 class="text-white mb-4">
                <i class="fa fa-user" aria-hidden="true"></i>
                Personal Life
              </h2>
              <p class="text-white-50">
                When I was 19, my girlfriend-at-that-time, and I found out that
                we were expecting. Figuring out how to get through college while
                learning to be parents while also paying for it all by ourselves
                was difficult to say the least. We had more than our fair share
                of obstacles, but through it all, we didn't sink; we swam and
                perservered through it all. At the end of the day, our struggles
                have made us more reselient and compassionate. I am proud of who
                we are as individuals and as a family, and I look forward to
                facing life's future challenges with the same tenacity and will
                with which we have faced the previous ones!
              </p>
              <!-- Carousel -->
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="personal-img"
                      src="../assets/prof_img00.jpg"
                      alt="First slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="personal-img"
                      src="../assets/prof_img01.jpg"
                      alt="Second slide"
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      class="personal-img"
                      src="../assets/prof_img02.jpg"
                      alt="Third slide"
                    />
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <img hidden class="img-fluid" src="../assets/ipad.png" alt="" />
      </div>
    </section>

    <!-- Projects-->
    <section class="projects-section bg-light" id="projects">
      <div class="container">
        <!-- Featured Project Row-->
        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
          <div class="col-xl-8 col-lg-7">
            <img
              class="img-fluid mb-3 mb-lg-0"
              src="../assets/glassdoor-mining-app.png"
              alt=""
            />
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="featured-text text-center text-lg-left">
              <a href="https://glassdoor-mining-proj.herokuapp.com/">
              <h4 class="text-white mb-4">Glassdoor Mining Project</h4>
              </a>
              <p class="text-white-50 mb-0">
                I have collected data from 2000 Glassdoor job posting regarding
                Data Scientists. I have cleaned, processed and analyzed that
                data, and afterwards, I applied machine learning algorithms on
                that data to build a data product that can estimate a salary,
                given certain variables.
              </p>
            </div>
          </div>
        </div>
        <!-- Project One Row-->
        <Project
          :img_left="true"
          img_name="blm.png"
          link_url="https://github.com/aghose/EAS_345_term_project"
          title="BLM Data Science Term project"
          description="I collected data from multiple .gov sources with ambitions
                      of using the data to point out existence of/lack of racial
                      bias in our institutions. I used R and DplyR methods to
                      clean and analyze the datasets and ggplot2 to graph them.
                      Using these tools, I was able to show that mortgage loan
                      applicants that were made by black people were more likely
                      to get rejected than their white counterparts. I also
                      utilized linear regression to build a model that could
                      predict an applicant's income given certain factors."
        >
        </Project>

        <!-- Project Two Row-->
        <Project
          :img_left="false"
          img_name="website.png"
          title="This Website!"
          link_url="/"
          description="This website was originally made to be a static HTML/CSS
                    page, made to showcase myself for future potential
                    employers. However, as I started having more fun with it, I
                    transformed it into a full vue application to further my
                    knowledge and understanding of front-end frameworks."
        >
        </Project>

        <!-- Project Three Row-->
        <Project
          :img_left="true"
          img_name="fullstack.png"
          link_url="https://salty-wave-86247.herokuapp.com/"
          title="FullStack WebApp using Vue and Express"
          description="This is a simple fullstack app I made to introduce myself to Vue.
                    I heard that most modern companies use front-end frameworks to build
                    their web applications, so I sought to familiarize myself with one"
        >
        </Project>

        <!-- Project Four Row-->
        <Project
          :img_left="false"
          img_name="particles.png"
          title="Particles effect"
          link_url="/particles"
          description="I sought to recreate the particles effect found on
                    vincentgarreau.com/particles.js/. This was just a fun
                    project I did to help further my understanding of
                    JavaScript"
        >
        </Project>

        <!-- Project Five Row -->
        <Project
          :img_left="true"
          img_name="tictactoe.png"
          title="TicTacToe"
          link_url="/tictactoe"
          description="This was a project made to introduce myself to
                    JavaScript"
        >
        </Project>

      </div>
    </section>

    <!-- Resume-->
    <section class="signup-section" id="resume">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8 mx-auto text-center">
            <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 class="text-white mb-5">
              <a href="/resume">Click here to see my official résumé</a>
            </h2>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact-->
    <section class="contact-section bg-black" id="contact">
      <div class="container">
        <div class="row">
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Address</h4>
                <hr class="my-4" />
                <div class="small text-black-50">
                  35 Slate Creek Dr. Apt 12, Cheektowaga, NY
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-envelope text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Email</h4>
                <hr class="my-4" />
                <div class="small text-black-50">
                  <a href="#!">aghose@buffalo.edu</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3 mb-md-0">
            <div class="card py-4 h-100">
              <div class="card-body text-center">
                <i class="fas fa-mobile-alt text-primary mb-2"></i>
                <h4 class="text-uppercase m-0">Phone</h4>
                <hr class="my-4" />
                <div class="small text-black-50">+1 (716) 482-2188</div>
              </div>
            </div>
          </div>
        </div>
        <div class="social d-flex justify-content-center">
          <a class="mx-2" href="https://www.linkedin.com/in/akash-ghose-b08998211/"><i class="fab fa-linkedin"></i></a>
          <a class="mx-2" href="https://github.com/aghose"><i class="fab fa-github"></i></a>
        </div>
      </div>
    </section>
    <!-- Footer-->
    <footer class="footer bg-black small text-center text-white-50">
      <div class="container">Thank you for visiting my site!</div>
    </footer>
  </div>
</template>

<!-- Main CSS file-->
<style scoped src='../css/home-styles.css'>
</style>

<script>
// @ is an alias to /src
import Vue from 'vue';
import LoadScript from 'vue-plugin-load-script';
import Project from '@/components/Project.vue';

export default {
  name: 'Home',
  components: {
    Project,
  },
  mounted() {
    this.$nextTick(() => {
      // Code that will run only after the
      // entire view has been rendered
      Vue.use(LoadScript);
      Vue.loadScript('./js/scripts.js');
    });
  },
};
</script>
