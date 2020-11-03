<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" >
      <b-navbar-brand href="/">
        <logo/>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/templates">Шаблоны</b-nav-item>
          <b-nav-item href="/global-parameters">Глобальные параметры</b-nav-item>
          <b-nav-item href="/history">История</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right>
            <template #button-content>
              <em>Пользователь</em>
            </template>
            <b-dropdown-item href="/profile">Профиль</b-dropdown-item>
            <b-dropdown-item href="#">Выход</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import Logo from "@/components/icons/Logo";
export default {
  name: "NavBar",
  components: {Logo}
}
</script>

<style scoped>

</style>