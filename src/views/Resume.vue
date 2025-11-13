<template>
  <div id="resume-vue" class="letter">
    <section id="save">
      <section class="sheet">

        <aside class="aside">
          <section class="contact">
            <h6>Contact</h6>
            <ul>
              <li>
                <p>
                  <span class="icon-wrapper">
                    <i class="fa fa-map-marker-alt" title="Location"></i>
                  </span>
                  Buffalo, NY
                </p>
              </li>
              <li>
                <p>
                  <span class="icon-wrapper">
                    <i class="fa fa-phone" title="Cell phone"></i>
                  </span>
                  <a href="tel:7164822188">(716) 482-2188</a>
                </p>
              </li>
              <li>
                <p>
                  <span class="icon-wrapper">
                    <i class="fa fa-envelope" title="Email"></i>
                  </span>
                  <a href="mailto:akash.ghose30@gmail.com">akash.ghose30@gmail.com</a>
                </p>
              </li>
              <li>
                <p>
                  <span class="icon-wrapper">
                    <i class="fa fa-globe-americas" title="Website"></i>
                  </span>
                  <a href="https://www.akash-ghose.com">akash-ghose.com</a>
                </p>
              </li>
              <li>
                <p>
                  <span class="icon-wrapper">
                    <i class="fab fa-github" title="GitHub"></i>
                  </span>
                  <a href="https://github.com/aghose">github.com/aghose</a>
                </p>
              </li>
            </ul>
          </section>
          <section class="sidebar-segment">
            <h6>Skills</h6>
              <ul>
                <li><span>Workflow Automation</span></li>
                <li><span>Backend APIs</span></li>
                <li><span>System Integration</span></li>
                <li><span>Data Engineering & Modeling</span></li>
                <li><span>Responsive UI/UX</span></li>
                <li><span>Authentication & Connectivity</span></li>
                <li><span>Logging & Observability</span></li>
              </ul>
          </section>

          <!-- Core Strengths (replaces Algorithms) -->
          <section class="sidebar-segment">
            <h6>Core Strengths</h6>
            <ul>
              <li><span>Clear communication</span></li>
              <li><span>Stakeholder partnership</span></li>
              <li><span>Ownership & initiative</span></li>
              <li><span>Structured problem solving</span></li>
              <li><span>Planning & prioritization</span></li>
            </ul>
          </section>

          <section class="sidebar-segment">
            <h6>Technologies</h6>
            <ul>
              <li><span>.NET Core</span></li>
              <li><span>C#</span></li>
              <li><span>Python</span></li>
              <li><span>SQL Server</span></li>
              <li><span>Oracle</span></li>
              <li><span>Entity Framework Core</span></li>
              <li><span>Power Automate</span></li>
              <li><span>SharePoint</span></li>
              <li><span>Selenium</span></li>
              <li><span>Angular</span></li>
              <li><span>WPF (MVVM)</span></li>
              <li><span>Git</span></li>
              <li><span>Node.js</span></li>
              <li><span>PostgreSQL</span></li>
              <li><span>R</span></li>
              <li><span>HTML/CSS/JavaScript</span></li>
            </ul>
          </section>
          <section class="sidebar-segment">
            <h6>Libraries</h6>
            <ul>
              <li><span>Pandas</span></li>
              <li><span>NumPy</span></li>
              <li><span>Matplotlib</span></li>
              <li><span>Seaborn</span></li>
              <li><span>scikit-learn</span></li>
              <li><span>dplyr</span></li>
              <li><span>ggplot2</span></li>
              <li><span>Shiny (R)</span></li>
              <li><span>Streamlit</span></li>
            </ul>
          </section>
          <!-- <section class="sidebar-segment">
            <h6>Algorithms</h6>
            <ul>
              <li><span>Linear Regression</span></li>
              <li><span>Logistic Regression</span></li>
              <li><span>Lasso Regression</span></li>
              <li><span>KNN</span></li>
              <li><span>K-Means</span></li>
            </ul>
          </section> -->
        </aside>
        <!-- HEADER -->
        <section>
          <header class="name" aria-label="Akash Ghose">
            <router-link to="/">
              <svg
                width="257px"
                height="35px"
                viewBox="0 0 350 35"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill-rule="evenodd"
                  font-family="Montserrat-Regular, Montserrat"
                  font-size="48"
                  font-weight="bold"
                  color="green"
                >
                  <g
                    id="Letter"
                    transform="translate(-54.000000, -140.000000)"
                    fill="#484848"
                  >
                    <text id="Akash-Ghose">
                      <tspan x="54.728" y="174">Akash Ghose</tspan>
                    </text>
                  </g>
                </g>
              </svg>
            </router-link>
            <h6>Software Engineer</h6>
            <hr />
          </header>
          <!-- MAIN BODY -->
          <section>
            <!-- EXPERIENCE -->
            <section class="experience">
              <h6 class="section-header">Experience</h6>
              <ol>

                <!--M&T -->
                <!-- eslint-disable max-len -->
                <li>
                  <header>
                    <p class="sanserif">Software Engineer I</p>
                    <time>Jan 2023 – Oct 2025</time>
                  </header>
                  <span>M&T Bank - Electronic Financial Crimes Investigations</span>
                  <ul>
                    <li>
                      Initiated the design of a SharePoint + Power Automate workflow to streamline BSA/AML screening;
                      authored the architecture, built a proof-of-concept, and defined audit-trail and folder-scoped triggers.
                    </li>
                    <li>
                      Designed a Wire Screening approval flow (“any two approvers from a group”) with folder-scoped triggers,
                      automatic moves to Accepted/Rejected libraries, and Teams notifications that reduced status chasing.
                    </li>
                    <li>
                      Developed resilient Selenium crawlers for case/negative-news portals with retry/backoff and structured exports
                      (CSV / pipe-delimited), including automated PDF generation and flattening.
                    </li>
                    <li>
                      Implemented structured, centralized logging and defensive error handling across tools, which sped incident triage
                      and simplified on-call support.
                    </li>
                    <li>
                      Implemented SQL Server extract utilities that executed views and exported strongly-typed, pipe-delimited files;
                      hardened authentication via Kerberos/LDAP and ODBC on Linux/Windows.
                    </li>
                    <li>
                      Standardized configuration, logging, and exception patterns (config-driven behavior, consistent conventions),
                      improving maintainability and reuse.
                    </li>
                    <li>
                      Partnered with Compliance and stakeholders to deliver iteratively (MVP → enhancements) and maintained concise
                      internal docs/READMEs for handoffs.
                    </li>
                  </ul>
                </li>

                <!--PPT -->
                <!-- eslint-disable max-len -->
                <li>
                  <header>
                    <p class="sanserif">Software Developer</p>
                    <time>Oct 2021 – Sept 2022</time>
                  </header>
                  <span>Post Process Technologies</span>
                  <ul>
                        <li>
                          Restructured major portions of the customer-facing web app, simplifying navigation and
                          reducing friction across core user flows.
                        </li>
                        <li>
                          Built Angular components and .NET Core APIs that expanded functionality and improved
                          responsiveness, introducing modular patterns for easier extension.
                        </li>
                        <li>
                          Modeled and maintained SQL Server data using Entity Framework Core (migrations, relationships,
                          and queries), improving stability and clarity of data access.
                        </li>
                        <li>
                          Implemented microservices that interfaced with shop-floor machines and emitted real-time alerts
                          to users, improving visibility into machine events.
                        </li>
                        <li>
                          Migrated legacy WPF code to a custom MVVM architecture to increase testability and maintainability,
                          reducing coupling between views and business logic.
                        </li>
                        <li>
                          Collaborated with management and cross-functional stakeholders to clarify requirements, sequence work,
                          and set realistic delivery timelines; provided feature demos and concise docs.
                        </li>
                  </ul>
                </li>

                <li>
                  <header>
                    <p class="sanserif">Software Engineer</p>
                    <time>Jan 2021 – Oct 2021</time>
                  </header>
                  <span>FoodWeb - Non Profit Startup</span>
                  <ul>
                    <li>
                      Modeled PostgreSQL schema and wrote stored procedures (constraints and indexes)
                      to support core features and reliable data access.
                    </li>
                    <li>
                      Developed server-side REST APIs in Node.js to handle core workflows,
                      adding input validation and structured error handling.
                    </li>
                    <li>
                      Built Angular components and services for key user flows, integrating API calls
                      for a responsive, consistent UI.
                    </li>
                    <li>
                      Collaborated with the project lead to define application architecture and
                      sequence deliverables; documented interfaces for smooth handoffs.
                    </li>
                  </ul>
                </li>
                <li>
                  <header>
                    <p class="sanserif">Teaching Assistant</p>
                    <time>January 2017 – January 2020</time>
                  </header>
                  <span>University at Buffalo – Dr. Matthew Hertz</span>
                  <ul>
                    <li>
                      Led weekly recitations and office hours for Intro to Programming I & II(Java, Python & C++);
                      prepared mini-lessons and live-coding examples to reinforce lecture material.
                    </li>
                    <li>
                      Coached students through debugging and informal code reviews, teaching systematic troubleshooting
                      and readable coding practices.
                    </li>
                    <li>
                      Translated core CS concepts (control flow, data structures, OOP/recursion) into step-by-step
                      exercises and short guides to close conceptual gaps.
                    </li>
                    <li>
                      Reviewed and clarified assignment specifications and starter code with the professor to reduce ambiguity
                      and prevent common errors.
                    </li>
                  </ul>
                </li>
              </ol>
            </section>
            <!-- PROJECTS -->
            <section class="experience projects">
              <h6 class="section-header">Projects</h6>
              <ol>
                <li>
                  <header class="project-title">
                    Glassdoor Mining project
                  </header>
                  <span>Supervised by Dr. Bina Ramamurthy</span>
                  <div class="project-description">
                    <ul>
                      <li>Scraped ~2,000 Glassdoor Data Scientist postings with Python and Selenium; exported structured data for analysis.</li>
                      <li>Cleaned and transformed records using pandas and NumPy to prepare consistent fields (title, location, skills, salary text).</li>
                      <li>Visualized trends with Matplotlib and Seaborn (common skills, roles by location, pay patterns).</li>
                      <li>Trained regression models in scikit-learn to estimate salary and validated results using standard splits.</li>
                      <li>Published a simple web app to present findings and predictions (Heroku).
                        <a href="https://glassdoor-mining-proj.herokuapp.com/">
                          glassdoor-mining-proj.herokuapp.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <header class="project-title">
                    BLM Data Science project
                  </header>
                  <div class="project-description">
                    <ul>
                      <li>Collected mortgage-related statistics from consumerfinance.gov datasets.</li>
                      <li>Cleaned and joined data using R (dplyr) and documented a reproducible script.</li>
                      <li>Visualized distributions and trends with ggplot2.</li>
                      <li>Explored relationships between applicant race, income, and loan outcomes using linear regression.</li>
                    </ul>
                  </div>
                </li>
                <li>
                  <header class="project-title">Other Projects</header>
                  <div class="project-description">
                    <ul>
                      <li>
                        Various other projects can be found at:
                        <a href="/#projects">akash-ghose.com/#projects</a>
                      </li>
                      <li>
                        Or visit GitHub at:
                        <a href="github.com/aghose">github.com/aghose</a>
                      </li>
                    </ul>
                  </div>
                </li>
              </ol>
            </section>
            <!-- EDUCATION -->
            <section class="education">
              <h6 class="section-header">Education</h6>
              <ol>
                <li>
                  <div>
                    <p class="sanserif">Bachelor of Arts in Economics</p>
                    <time>University at Buffalo: Dec 2020</time>
                  </div>
                </li>
                <li>
                  <div>
                    <p class="sanserif">Minor in Computer Science</p>
                    <time></time>
                  </div>
                </li>
                <li>
                  <span class="coursework">
                    <ul>
                      <li>
                        Coursework: Data Science, Distributed Systems, Web
                        Design
                      </li>
                    </ul>
                  </span>
                </li>
              </ol>
            </section>
          </section>
        </section>

      </section>
    </section>
  </div>
</template>

<style scoped src="../css/paper.css"></style>

<style scoped src="../css/typography.css"></style>

<style scoped src="../css/resume-styles.css"></style>

<!-- Print only-->
<style src="../css/print.css"></style>

<!-- Screen only-->
<style src="../css/screen.css"></style>

<script>
export default {
  name: 'Resume',
  components: {}
}
</script>
