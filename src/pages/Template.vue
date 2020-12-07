<template>
  <ntf-page>
    <div class="row">
      <div class="col-12">
        <b-alert
            :show="dismissCountDown"
            dismissible
            variant="success"
            @dismissed="dismissCountDown=0"
            @dismiss-count-down="countDownChanged"
        >
          Отправлено
        </b-alert>
      </div>
    </div>
    <div class="row">
      <div class="col-10">
        <b-breadcrumb :items="breads" style="background-color: white"></b-breadcrumb>
      </div>
      <div class="col-2 p-1">
        <b-button variant="success"  v-b-modal.modal-1>Создать шаблон</b-button>
      </div>
    </div>
    <b-table striped hover sticky-header :items="items" :fields="fields" responsive="responsive">
      <template #cell(action)="">
        <b-button variant="warning"  v-b-modal.modal-2>
          <b-icon-pen-fill/>
        </b-button>
        <b-button variant="primary" class="ml-1" @click="sendRequest">
          <b-icon-play-fill/>
        </b-button>
        <b-button variant="success" class="ml-1" v-b-modal.modal-3>
          <b-icon-bar-chart/>
        </b-button>
      </template>
    </b-table>
    <b-modal id="modal-1" size="lg" title="Создание шаблона">
      <create-template/>
    </b-modal>
    <b-modal id="modal-2" size="lg" title="Редактирование шаблона">
      <edit-template/>
    </b-modal>
    <b-modal id="modal-3" size="xl" title="Статистика шаблона">
      <template-statistics/>
    </b-modal>
  </ntf-page>
</template>

<script>
import axios from 'axios'
import CreateTemplate from "@/components/CreateTemplate";
import EditTemplate from "@/components/EditTemplate";
import TemplateStatistics from "@/components/TemplateStatistics";
import NtfPage from "@/plugins/ntfUI/pages/ntfPage";
export default {
  name: "Template",
  components: {NtfPage, TemplateStatistics, EditTemplate, CreateTemplate},
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
        {
          key: 'action',
          label: 'Action',
          sortable: false
        },
      ],
      items: [
        {code: 'TEST', delivery_channel: 'PUSH', language: 'RUS',content:'Test notification.' },
        {code: 'SAS', delivery_channel: 'PUSH', language: 'RUS',content:'SAS notification.' },
        {code: 'TEST', delivery_channel: 'PUSH', language: 'RUS',content:'Test notification.' },
        {code: 'SAS', delivery_channel: 'PUSH', language: 'RUS',content:'SAS notification.' },
        {code: 'TEST', delivery_channel: 'PUSH', language: 'RUS',content:'Test notification.' },
        {code: 'SAS', delivery_channel: 'PUSH', language: 'RUS',content:'SAS notification.' },
        {code: 'TEST', delivery_channel: 'PUSH', language: 'RUS',content:'Test notification.' },
        {code: 'SAS', delivery_channel: 'PUSH', language: 'RUS',content:'SAS notification.' },
        {code: 'TEST', delivery_channel: 'PUSH', language: 'RUS',content:'Test notification.' },
        {code: 'SAS', delivery_channel: 'PUSH', language: 'RUS',content:'SAS notification.' },
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
      ],
      dismissSecs: 3,
      dismissCountDown: 0
    }
  },
  methods:{
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    sendRequest(){
      const options = {
        headers: {
          'Content-Type': 'application/json',
          'SOURCE_SYSTEM':'NTF'
        }
      };
      this.dismissCountDown = this.dismissSecs
      axios.post('http://10.8.53.92:8080/api/v2/message', {
          "template": "TEST",
          "language": "KAZ",
          "phoneNumber": "7473569355",
          "cuid": "4817630"
        },
            options
        )
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
    }
  }
}
</script>

<style scoped>

</style>