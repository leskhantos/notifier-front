<template>
<div class="container">
  <b-table striped hover :items="items" :fields="fields"></b-table>
</div>
</template>

<script>
export default {
  name: "Template",
  data() {
    return {
      fields: ['first_name', 'last_name', 'age'],
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
      ]
    }
  }
}
</script>

<style scoped>

</style>