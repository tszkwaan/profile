<template>
  <v-btn flat @click="goToSection(link)">{{ label }}</v-btn>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  },
  methods: {
    goToSection(section) {
      location.href = `#${section}`
    }
  }
}
</script>

<style lang="css" scoped>
</style>
