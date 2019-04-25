<template>
  <v-card class="wrapper-content">
    <v-card-text class="card-background">
      <div v-for="(backgroundItem, index) in background" :key="`bg-${index}`">
        <p>{{ backgroundItem }}</p>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    background: {
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
.card-background {
  text-align: left;
}
</style>
