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
              <v-card class="wrapper-content">
                <v-card-text class="wrapper-background">
                  <div>
                    <template v-for="(background, bgIndex) in project.detail.background">
                      <p :key="`bg-${bgIndex}`">{{ background }}</p>
                    </template>
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item class="conent-dialog">
              <v-card class="wrapper-content">
                <v-card-text class="wrapper-feature subheading">
                  <ol>
                    <li
                      v-for="(feature, featureIndex) in project.detail.features"
                      :key="`feature-${featureIndex}`"
                    >
                      <div class="feature-text">{{ feature.text }}</div>
                      <div>
                        <img
                          class="feature-image"
                          :src="`${publicPath}${feature.image}`"
                          :alt="feature.text"
                        >
                      </div>
                    </li>
                  </ol>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item class="conent-dialog">
              <v-card class="wrapper-content">
                <v-card-text class="wrapper-technique subheading">
                  <ul>
                    <li
                      v-for="(technique, techniqueIndex) in project.detail.techniques"
                      :key="`technique-${techniqueIndex}`"
                    >
                      <div class="technique-text">
                        <span class="font-weight-bold">{{ technique.category }}:</span>
                        {{ technique.list.toString() }}
                      </div>
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </v-tab-item>
          </v-tabs>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Project from "@/models/project.js";

export default {
  data() {
    return {
      dialog: false,
      project: new Project(),
      selectedTab: 0,
      publicPath: process.env.BASE_URL,
      showSectionBackground: true
    };
  },
  methods: {
    showDialog(project) {
      this.selectedTab = 0;
      this.showSectionBackground = project.detail.background ? true : false;
      this.dialog = true;
      this.project = project;
    }
  }
};
</script>

<style lang="css" scoped>
.wrapper-background {
  text-align: left;
}
.feature-image {
  max-height: 300px;
  margin-bottom: 10px;
}
.wrapper-feature {
  text-align: left;
  vertical-align: middle;
}
.conent-dialog {
  /* width: 750px;
  height: 400px; */
  overflow-y: auto;
}
.feature-text {
  margin-bottom: 10px;
}
.wrapper-content {
  /* width: 100%;*/
  height: 350px;
  overflow-y: auto;
}
.wrapper-content-dialog {
  width: 100%;
  height: 450px;
  /* overflow-y: auto; */
}
.wrapper-technique {
  text-align: left;
}
</style>
