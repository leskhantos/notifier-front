<template>
  <ntf-page>
    <b-card img-src="https://placekitten.com/300/300" img-alt="Card image" img-left class="mb-2">
      <b-card-text>
        Некоторые данные о профиле.
      </b-card-text>
    </b-card>
  </ntf-page>
</template>

<script>
import NtfPage from "@/plugins/ntfUI/pages/ntfPage";
export default {
  name: "Profile",
  components: {NtfPage},
}
</script>

<style scoped>

</style>