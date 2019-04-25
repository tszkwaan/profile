<template>
  <div id="skills" class="section">
    <v-container fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 md6>
          <div class="wrapper-content">
            <template v-for="(skill, index) in skills">
              <div :key="`skill-${index}`">
                <div class="title">{{ skill.category }}</div>
                <div class="text-skill">{{ skill.list.toString() }}</div>
              </div>
            </template>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Skill",
  data: () => ({
    skills: [
      {
        category: "Client-side",
        list: ["Vue.js", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap"]
      },
      {
        category: "Server-side",
        list: ["Java", "Java Spring", "J2EE", "Node.js"]
      },
      {
        category: "Databases",
        list: ["MySQL", "MongoDB", "Postgres"]
      },
      {
        category: "DevOps",
        list: ["Docker", "GitLab CI", "Jenkins"]
      },
      {
        category: "Linting",
        list: ["Eslint", "Checkstyle"]
      },
      {
        category: "Version control management",
        list: ["Git"]
      }
    ]
  })
};
</script>

<style lang="scss" scoped>
.section {
  background: url("../../public/bg_skill.jpg");
}
.wrapper-content {
  text-align: center;
  background: rgba(255, 255, 255, 0) !important;
  padding: 5px;
  color: black;
}
.title,
.text-skill {
  margin-bottom: 20px;
}
.text-skill {
  font-size: 16px;
}
</style>
