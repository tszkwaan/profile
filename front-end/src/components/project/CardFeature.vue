<template>
  <v-card class="wrapper-content">
    <v-card-text class="card-feature subheading">
      <ol>
        <li v-for="(feature, index) in features" :key="`feature-${index}`">
          <div class="feature-text">{{ feature.text }}</div>
          <div>
            <img class="feature-image" :src="`${publicPath}${feature.image}`" :alt="feature.text">
          </div>
        </li>
      </ol>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    features: {
      type: Array,
      default: []
    }
  },
  data: () => ({
    publicPath: process.env.BASE_URL
  })
}
</script>

<style lang="css" scoped>
.feature-image {
  max-height: 300px;
  margin-bottom: 10px;
}
.feature-text {
  margin-bottom: 10px;
}
.card-feature {
  text-align: left;
  vertical-align: middle;
}
</style>
