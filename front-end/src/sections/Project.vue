<template>
  <div id="projects" class="section">
    <v-container fill-height grid-list-md>
      <v-layout align-center justify-center row fill-height wrap>
        <template v-for="(project, index) in projects">
          <card-project :key="`project-${index}`" :project="project" @showDetail="showDetail"/>
        </template>
      </v-layout>
      <dialog-project ref="projectDialog"/>
    </v-container>
  </div>
</template>
<script>
import DialogProject from '@/components/project/DialogProject.vue'
import CardProject from '@/components/project/CardProject.vue'

export default {
  name: 'Project',
  components: {
    DialogProject,
    CardProject
  },
  data: () => ({
    projects: [
      {
        period: '2018',
        title: 'Fly2Me',
        tagline: 'A flight management system for self use',
        image: 'project_fly2me.jpg',
        detail: {
          background: [
            'As a frequent flyer, I had to manage a bunch of flight & hotel information.',
            'When check-in for flight online, I used to find around my email inbox to trace the latest flight order number; when claiming for insurance, I had to check my schedule book to check the last flight period; few days before a trip, I go to Agoda to double check if I have reserved for a hotel or not; and before onboarding, I have to notify my family of my flight detail.',
            "It was time-consuming & messy for me to go around different web/apps to perform the above operations. That's how Fly2me was born. I hope there's a place for me to manage my flight & hotel orders at once."
          ],
          features: [
            {
              text: 'Register/view flight information',
              image: 'feature_flights.jpg'
            },
            {
              text: 'Mark reserved accomodation of a trip',
              image: 'feature_hotel.jpg'
            }
          ],
          techniques: [
            {
              category: 'Client-side',
              list: ['Vue.js', 'Vuetify']
            },
            {
              category: 'Server-side',
              list: ['Java Spring']
            },
            {
              category: 'Database',
              list: ['MySQL']
            },
            {
              category: 'DevOps',
              list: ['Docker', 'GitLab CI']
            }
          ]
        }
      },
      {
        period: '2018',
        title: "Tsz's Portfolio",
        tagline:
          'A portfolio website to introduce myself & showcase my web apps',
        image: 'project_profile.jpg',
        detail: {
          features: [
            {
              text: 'Overview',
              image: 'feature_overview.jpg'
            },
            {
              text: 'Working & education experiences',
              image: 'feature_experiences.jpg'
            },
            {
              text: 'Projects showcase',
              image: 'feature_projects.jpg'
            },
            {
              text: 'Skills',
              image: 'feature_skills.jpg'
            },
            {
              text: 'Social media links',
              image: 'feature_social.jpg'
            }
          ],
          techniques: [
            {
              category: 'Client-side',
              list: ['Vue.js', 'Vuetify']
            },
            {
              category: 'DevOps',
              list: ['Docker', 'GitLab CI']
            }
          ]
        }
      }
    ]
  }),
  methods: {
    showDetail(project) {
      this.$refs.projectDialog.showDialog(project)
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url('../../public/bg_project.jpg');
}
</style>
