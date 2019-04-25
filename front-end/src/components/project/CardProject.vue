<template>
  <v-flex xs12 sm5 md5 @click="showDetail(project)">
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

<script>
export default {
  props: {
    project: {
      type: Object,
      default: () => ({})
    }
  },
  data: () => ({
    publicPath: process.env.BASE_URL
  }),
  methods: {
    showDetail(project) {
      this.$emit('showDetail', project)
    }
  }
}
</script>

<style lang="scss" scoped>
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
