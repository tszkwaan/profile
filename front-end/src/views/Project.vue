<template>
  <div id="projects" class="section">
    <v-container fill-height grid-list-md>
      <v-layout align-center justify-center row fill-height wrap>
        <template v-for="(project, index) in projects">
          <v-flex xs12 sm7 md5 :key="`project-${index}`" @click="showDetail(project)">
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-card class="project-card">
                  <v-card-title class="title font-weight-thin">{{ project.title }}</v-card-title>
                  <v-card-text>
                    <div class="tagline">{{ project.tagline }}</div>
                    <img :src="`${publicPath}${project.image}`" :alt="`UI of ${project.title}`">
                  </v-card-text>
                </v-card>
              </template>
              <span>View project detail</span>
            </v-tooltip>
          </v-flex>
        </template>
      </v-layout>
      <dialog-project ref="projectDialog"/>
    </v-container>
  </div>
</template>
<script>
import DialogProject from "@/components/project/DialogProject.vue";

export default {
  name: "Project",
  components: {
    DialogProject
  },
  data: () => ({
    projects: [
      {
        period: "2018",
        title: "Fly2Me",
        tagline: "A flight management system for self use",
        image: "project_fly2me.jpg",
        detail: {
          background: [
            "As a frequent flyer, I had to manage a bunch of flight & hotel information.",
            "When check-in for flight online, I used to find around my email inbox to trace the latest flight order number; when claiming for insurance, I had to check my schedule book to check the last flight period; few days before a trip, I go to Agoda to double check if I have reserved for a hotel or not; and before onboarding, I have to notify my family of my flight detail.",
            "It was time-consuming & messy for me to go around different web/apps to perform the above operations. That's how Fly2me was born. I hope there's a place for me to manage my flight & hotel orders at once."
          ],
          features: [
            {
              text: "Register/view flight information",
              image: "feature_flights.jpg"
            },
            {
              text: "Mark reserved accomodation of a trip",
              image: "feature_hotel.jpg"
            }
          ],
          techniques: [
            {
              category: "Client-side",
              list: ["Vue.js", "Vuetify"]
            },
            {
              category: "Server-side",
              list: ["Java Spring"]
            },
            {
              category: "Database",
              list: ["MySQL"]
            },
            {
              category: "DevOps",
              list: ["Docker", "GitLab CI"]
            }
          ]
        }
      },
      {
        period: "2018",
        title: "Tsz's Profile",
        tagline: "A profile website to introduce myself & showcase my web apps",
        image: "project_profile.jpg",
        detail: {
          features: [
            {
              text: "Overview",
              image: "feature_overview.jpg"
            },
            {
              text: "Working & education experiences",
              image: "feature_experiences.jpg"
            },
            {
              text: "Projects showcase",
              image: "feature_projects.jpg"
            },
            {
              text: "Skills",
              image: "feature_skills.jpg"
            }
          ],
          techniques: [
            {
              category: "Client-side",
              list: ["Vue.js", "Vuetify"]
            },
            {
              category: "DevOps",
              list: ["Docker", "GitLab CI"]
            }
          ]
        }
      }
    ],
    publicPath: process.env.BASE_URL
  }),
  methods: {
    showDetail(project) {
      this.$refs.projectDialog.showDialog(project);
    }
  }
};
</script>

<style lang="scss" scoped>
.section {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../../public/bg_project.jpg");
}
.experience-detail {
  margin: 5px;
}
.project-card {
  text-align: left;
  text-align: center;
  .tagline {
    margin-bottom: 10px;
  }
  &:hover {
    cursor: pointer;
  }
}
.v-card {
  background: rgba(255, 255, 255, 0.9) !important;
}
.tagline {
  font-size: 16px;
  height: 40px;
}
img {
  max-height: 100%;
  max-width: 100%;
}
</style>
