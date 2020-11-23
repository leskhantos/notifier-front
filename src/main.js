import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {setTokenHeaders} from "@/api";
import VueCookies from 'vue-cookies'
import '@/plugins/apexcharts'

//bootstrap import and use
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const token = VueCookies.get('Authorization')
if (token){
  setTokenHeaders(token)
}
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
