<template>
  <div id="app">
    <nav-bar/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: 'App',
  components: {NavBar},
  methods:{
    next(){
      this.$router.push('/asd')
    }
  }
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
