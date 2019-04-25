<template>
  <v-card class="wrapper-content">
    <v-card-text class="wrapper-technique subheading">
      <ul>
        <li v-for="(technique, index) in techniques" :key="`technique-${index}`">
          <div class="technique-text">
            <span class="font-weight-bold">{{ technique.category }}:</span>
            {{ technique.list.toString() }}
          </div>
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    techniques: {
      type: Array,
      default: []
    }
  }
}
</script>

<style lang="css" scoped>
.wrapper-technique {
  text-align: left;
}
</style>
