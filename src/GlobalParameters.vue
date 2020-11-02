<template>
  <div>
    <div class="row">
      <div class="col-9"></div>
      <div class="col-3 p-1">
        <b-button variant="success"  v-b-modal.modal-1>Создать глобальный параметр</b-button>
      </div>
    </div>
    <b-table striped hover :items="items" :fields="fields" responsive="responsive"></b-table>
  </div>
</template>

<script>
export default {
  name: "GlobalParameters",
  data() {
    return {
      fields: [
        {
          key: 'code',
          label:'Код',
          sortable: true
        },
        {
          key: 'value',
          label: 'Значение',
          sortable: false
        },],
      items: [
        { code: 'NOTIFICATION_LANGUAGE_DEFAULT', value: 'RUS'},
      ]
    }
  }
}
</script>

<style scoped>

</style>