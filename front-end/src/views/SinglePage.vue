<template>
  <div class="single-page fill-height">
    <about/>
    <experience/>
    <project/>
    <skill/>
  </div>
</template>

<script>
import About from "@/views/About.vue";
import Experience from "@/views/Experience.vue";
import Skill from "@/views/Skill.vue";
import Project from "@/views/Project.vue";

export default {
  name: "SinglePage",
  components: {
    About,
    Experience,
    Skill,
    Project
  }
};
</script>

<style>
.section {
  height: 100vh;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  background-position: center center !important;
  color: white;
}
.wrapper-footer {
  width: 100%;
}
</style>
