<template>
  <div>
    <nav-bar/>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-2">
      <b-card-text>
        Некоторые данные о профиле.
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
export default {
  name: "Profile",
  components: {NavBar}
}
</script>

<style scoped>

</style>