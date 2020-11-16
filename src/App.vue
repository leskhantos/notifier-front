<template>
  <div id="app">
    <nav-bar v-if="this.$route.path === '/' ? this.showNavigation = false : this.showNavigation = true"/>
    <router-view></router-view>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
export default {
  name: 'App',
  components: {NavBar},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
