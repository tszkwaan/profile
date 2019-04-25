
<template>
  <v-btn flat slot="activator" @click="goToURL(url)">
    <svg
      role="img"
      style="width:25px;height:25px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path :fill="dark ? '#ffffff' : '#000000'" :d="d"></path>
    </svg>
  </v-btn>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      default: true
    },
    url: {
      type: String,
      required: true
    },
    d: {
      type: String,
      required: true
    }
  },
  methods: {
    goToURL(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
