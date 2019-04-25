<template>
  <div id="about" class="section">
    <v-layout id="row-about" align-center justify-center row fill-height wrap>
      <v-flex sm3/>
      <v-flex xs12 sm6>
        <div class="name font-weight-bold">Tsz Kwan</div>
        <div class="description">
          A
          <span class="font-weight-bold">Software Engineer</span> who enjoy making useful web apps to make life better :)
        </div>
        <div class="overview-skills">
          <v-layout row wrap>
            <template v-for="(skill, index) in skills">
              <item-skill :key="`overview-skill-${index}`" :skill="skill"/>
            </template>
          </v-layout>
        </div>
      </v-flex>
      <v-flex sm3/>
    </v-layout>
  </div>
</template>

<script>
import ItemSkill from '@/components/overview/ItemSkill.vue'

export default {
  components: {
    ItemSkill
  },
  data: () => ({
    skills: [
      'Design & Develop web apps',
      'Enhance UI & UX',
      'Setup CI/CD',
      'Maintain code quality',
      'Documentation'
    ]
  })
}
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
    url('../../public/bg_about.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.name {
  font-family: 'Crimson Text';
  font-size: 60px;
}
</style>
