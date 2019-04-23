<template>
  <div id="experiences" class="section">
    <v-container fill-height grid-list-md>
      <v-layout align-center justify-center row fill-height wrap>
        <v-flex xs12 sm8>
          <v-timeline :dense="this.$vuetify.breakpoint.smAndDown">
            <v-timeline-item
              v-for="(experience, index) in experiences"
              :key="`experience-${index}`"
              small
              color="black"
            >
              <v-card class="elevation-2">
                <v-card-text>
                  <div class="title">{{ experience.title }}</div>
                  <div class="subheading">{{ experience.company }}</div>
                  <div>{{ experience.period }}</div>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Experience",
  data: () => ({
    experiences: [
      {
        period: "2017 - 2019",
        title: "Software Engineer",
        company: "Works Applications Co., Ltd, Shanghai"
      },
      {
        period: "2015 - 2016",
        title: "Placement Programmer",
        company: "The Bank of East Asia, Hong Kong"
      },
      {
        period: "2017",
        title: "BSc (Hons) Information Technology",
        company: "The Hong Kong Polytechnic University, Hong Kong"
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.section {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../../public/bg_experience.jpg");
}
</style>
