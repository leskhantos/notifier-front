<template>
  <div>
    <div class="row">
      <div class="col-10">
        <b-breadcrumb :items="breads" style="background-color: white"></b-breadcrumb>
      </div>
      <div class="col-2 p-1">
        <b-button variant="success"  v-b-modal.modal-1>Создать шаблон</b-button>
      </div>
    </div>
    <b-table striped hover :items="items" :fields="fields" responsive="responsive"></b-table>
    <b-modal id="modal-1" title="Создание шаблона">
      <template-create-page/>
    </b-modal>
  </div>
</template>

<script>
import TemplateCreatePage from "@/components/TemplateCreatePage";
export default {
  name: "Template",
  components: {TemplateCreatePage},
  data() {
    return {
      fields: [
        {
          key: 'code',
          label:'Код',
          sortable: true
        },
        {
          key: 'delivery_channel',
          label: 'Канал доставки',
          sortable: false
        },
        {
          key: 'language',
          label: 'Язык доставки',
          sortable: false
        },
        {
          key: 'content',
          label: 'Контент',
          sortable: false
        },
      ],
      items: [
        {code: 'TEST', delivery_channel: 'PUSH', language: 'RUS',content:'Test notification.' },
        {code: 'SAS', delivery_channel: 'PUSH', language: 'RUS',content:'SAS notification.' },
      ],
      breads:[
        {
          text: 'Главная',
          href: '/'
        },
        {
          text: 'Шаблоны',
          active: true
        }
      ]
    }
  },
  methods:{
  }
}
</script>

<style scoped>

</style>