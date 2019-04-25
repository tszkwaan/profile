<template>
  <div>
    <v-dialog v-model="dialog" width="750">
      <v-card class="wrapper-content-dialog">
        <v-card-text>
          <v-tabs fixed-tabs v-model="selectedTab">
            <v-tab v-if="showSectionBackground">Background</v-tab>
            <v-tab>Feature</v-tab>
            <v-tab>Techniques</v-tab>
            <v-tab-item v-if="showSectionBackground" class="conent-dialog">
              <card-background :background="project.detail.background"/>
            </v-tab-item>
            <v-tab-item class="conent-dialog">
              <card-feature :features="project.detail.features"/>
            </v-tab-item>
            <v-tab-item class="conent-dialog">
              <card-technique :techniques="project.detail.techniques"/>
            </v-tab-item>
          </v-tabs>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import CardBackground from '@/components/project/CardBackground.vue'
import CardFeature from '@/components/project/CardFeature.vue'
import CardTechnique from '@/components/project/CardTechnique.vue'

import Project from '@/models/project.js'

export default {
  components: {
    CardBackground,
    CardFeature,
    CardTechnique
  },
  data() {
    return {
      dialog: false,
      project: new Project(),
      selectedTab: 0,
      publicPath: process.env.BASE_URL,
      showSectionBackground: true
    }
  },
  methods: {
    showDialog(project) {
      this.selectedTab = 0
      this.showSectionBackground = project.detail.background ? true : false
      this.dialog = true
      this.project = project
    }
  }
}
</script>

<style lang="css">
.wrapper-content {
  height: 350px;
  overflow-y: auto;
}
</style>
<style lang="css" scoped>
.conent-dialog {
  overflow-y: auto;
}
.wrapper-content-dialog {
  width: 100%;
  height: 450px;
}
</style>
