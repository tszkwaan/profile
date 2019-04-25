<template>
  <v-menu>
    <template v-slot:activator="{ on }">
      <v-toolbar-side-icon v-on="on"/>
    </template>
    <v-list>
      <v-list-tile
        v-for="(section, index) in sections"
        :key="`menu-item-${index}`"
        @click="goToSection(section.link)"
      >
        <v-list-tile-title v-text="section.label"/>
      </v-list-tile>
      <v-divider/>
      <v-list-tile>
        <button-linked-in :dark="false"/>
      </v-list-tile>
      <v-list-tile>
        <button-git-hub :dark="false"/>
      </v-list-tile>
    </v-list>
  </v-menu>
</template>

<script>
import ButtonLinkedIn from '@/components/buttons/ButtonLinkedIn.vue'
import ButtonGitHub from '@/components/buttons/ButtonGitHub.vue'

export default {
  props: {
    sections: {
      type: Array,
      default: []
    }
  },
  components: {
    ButtonLinkedIn,
    ButtonGitHub
  }
}
</script>

<style lang="css" scoped>
</style>
