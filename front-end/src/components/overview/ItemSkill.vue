<template>
  <v-flex xs12 sm12 md12 lg6>
    <v-icon class="icon-tick" dark>done</v-icon>
    {{ skill }}
  </v-flex>
</template>

<script>
export default {
    props: {
        skill: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="css" scoped>
</style>
