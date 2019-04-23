<template>
  <v-app>
    <navbar/>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer class="pa-3" dark>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }} - Tsz Kwan Chong</div>
    </v-footer>
  </v-app>
</template>
<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar
  }
};
</script>
<style lang="scss">
html,
body,
#app,
.page {
  height: 100%;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo {
  margin-top: 5px;
  width: 13rem;
  height: 2.3rem;
}
nav {
  a {
    color: white;
    text-decoration: none;
    height: 100%;
    &.router-link-active {
      color: white;
    }
  }
}
.section-headline {
  font-family: "Old Standard TT script=latin rev=1";
  text-align: left;
  margin-bottom: 1rem;
}
.navbar-icon {
  width: 1rem;
  height: 1rem;
}
</style>
