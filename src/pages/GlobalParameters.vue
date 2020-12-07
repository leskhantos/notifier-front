<template>
  <ntf-page>
      <div class="row">
        <div class="col-9"></div>
        <div class="col-3 p-1">
          <b-button variant="success"  v-b-modal.modal-1>Создать глобальный параметр</b-button>
        </div>
      </div>
    <ntf-page-body>
      <b-table striped hover sticky-header :items="items" :fields="fields" responsive="responsive"></b-table>
    </ntf-page-body>
  </ntf-page>
</template>

<script>
import NtfPage from "@/plugins/ntfUI/pages/ntfPage";
import NtfPageBody from "@/plugins/ntfUI/pages/ntfPageBody";
export default {
  name: "GlobalParameters",
  components: {NtfPageBody, NtfPage},
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
        { code: 'NOTIFICATION_LANGUAGE_DEFAULT', value: 'RUS'},
        { code: 'NOTIFICATION_LANGUAGE_DEFAULT', value: 'RUS'},
        { code: 'NOTIFICATION_LANGUAGE_DEFAULT', value: 'RUS'},
        { code: 'NOTIFICATION_LANGUAGE_DEFAULT', value: 'RUS'},
        { code: 'NOTIFICATION_LANGUAGE_DEFAULT', value: 'RUS'},
        { code: 'NOTIFICATION_LANGUAGE_DEFAULT', value: 'RUS'},
        { code: 'NOTIFICATION_LANGUAGE_DEFAULT', value: 'RUS'},
        { code: 'NOTIFICATION_LANGUAGE_DEFAULT', value: 'RUS'},
      ]
    }
  }
}
</script>

<style scoped>

</style>