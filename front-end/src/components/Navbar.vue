<template>
  <v-toolbar dark fixed class="transparent">
    <v-toolbar-title id="nav-title">Tsz's Portfolio</v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down">
      <template v-for="(section, index) in sections">
        <button-section :key="`section-btn-${index}`" :label="section.label" :link="section.link"/>
      </template>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <button-linked-in/>
      <button-git-hub/>
    </v-toolbar-items>
    <v-toolbar-items v-if="this.$vuetify.breakpoint.smAndDown">
      <navbar-menu :sections="sections"/>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import ButtonLinkedIn from '@/components/buttons/ButtonLinkedIn.vue'
import ButtonGitHub from '@/components/buttons/ButtonGitHub.vue'
import ButtonSection from '@/components/buttons/ButtonSection.vue'
import NavbarMenu from '@/components/NavbarMenu.vue'

export default {
  name: 'navbar',
  components: {
    ButtonLinkedIn,
    ButtonGitHub,
    ButtonSection,
    NavbarMenu
  },
  data: () => ({
    sections: [
      {
        label: 'About',
        link: 'about'
      },
      {
        label: 'Experiences',
        link: 'experiences'
      },
      {
        label: 'Projects',
        link: 'projects'
      },
      {
        label: 'Skills',
        link: 'skills'
      }
    ],
    drawer: false
  })
}
</script>

<style scoped>
#nav-title {
  font-family: 'Crimson Text';
  margin-right: 24px;
  font-size: 25px;
}
</style>
