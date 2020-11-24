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
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #e8e8e8 ;
  background-image: url("assets/smile.png");
  background-repeat: no-repeat;
  background-position: right bottom;
}
</style>
