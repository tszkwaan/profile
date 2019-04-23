<template>
  <v-toolbar dark fixed class="transparent">
    <v-toolbar-title class="nav-title">Tsz's Profile</v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down">
      <template v-for="(section, index) in sections">
        <v-btn
          flat
          :key="`section-btn-${index}`"
          @click="goToSection(section.link)"
        >{{ section.label }}</v-btn>
      </template>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <button-linked-in/>
    </v-toolbar-items>
    <v-toolbar-items v-if="this.$vuetify.breakpoint.smAndDown">
      <v-menu :nudge-width="100">
        <template v-slot:activator="{ on }">
          <v-toolbar-side-icon v-on="on"/>
        </template>
        <v-list>
          <v-list-tile
            v-for="(section, index) in sections"
            :key="`section-list-item-${index}`"
            @click="goToSection(section.link)"
          >
            <v-list-tile-title v-text="section.label"></v-list-tile-title>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile>
            <button-linked-in :dark="false"></button-linked-in>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import ButtonLinkedIn from "@/components/buttons/ButtonLinkedIn.vue";

export default {
  name: "navbar",
  components: {
    ButtonLinkedIn
  },
  data: () => ({
    sections: [
      {
        label: "About",
        link: "about"
      },
      {
        label: "Experiences",
        link: "experiences"
      },
      {
        label: "Projects",
        link: "projects"
      },
      {
        label: "Skills",
        link: "skills"
      }
    ],
    drawer: false
  }),
  methods: {
    goToSection(section) {
      location.href = `#${section}`;
    }
  }
};
</script>

<style scoped>
.nav-title {
  font-family: "Crimson Text";
  margin-right: 24px;
  font-size: 25px;
}
</style>
