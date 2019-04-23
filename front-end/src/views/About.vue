<template>
  <div id="about" class="section">
    <v-layout id="row-about" align-center justify-center row fill-height wrap>
      <v-flex sm3></v-flex>
      <v-flex xs12 sm6>
        <div class="name font-weight-bold">Tsz Kwan</div>
        <div class="description">
          A
          <span class="font-weight-bold">Web Developer</span> who enjoy making useful web apps to make life better :)
        </div>
        <div class="overview-skills">
          <v-layout row wrap>
            <v-flex xs12 sm12 md12 lg6>
              <v-icon class="icon-tick" dark>done</v-icon>Design & Develop web apps
            </v-flex>
            <v-flex xs12 sm12 md12 lg6>
              <v-icon class="icon-tick" dark>done</v-icon>Enhance UI & UX
            </v-flex>
            <v-flex xs12 sm12 md12 lg6>
              <v-icon class="icon-tick" dark>done</v-icon>Setup CI/CD
            </v-flex>
            <v-flex xs12 sm12 md12 lg6>
              <v-icon class="icon-tick" dark>done</v-icon>Maintain code quality
            </v-flex>
            <v-flex xs12 sm12 md12 lg6>
              <v-icon class="icon-tick" dark>done</v-icon>Documentation
            </v-flex>
          </v-layout>
        </div>
      </v-flex>
      <v-flex sm3></v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.name {
  font-size: 30px;
  margin: 8px 0;
}
.description {
  font-size: 24px;
  margin: 8px 0;
  margin-bottom: 30px;
}
.overview-skills {
  margin-top: 10px;
  font-size: 20px;
  text-align: left;
  .flex {
    margin-bottom: 10px;
  }
}
.icon-tick {
  margin-right: 8px;
}
#row-about {
  padding-bottom: 50px;
  padding: 10px;
}
.section {
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("../../public/bg_about.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.name {
  font-family: "Crimson Text";
  font-size: 60px;
}
</style>
