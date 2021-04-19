import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {setTokenHeaders} from "@/api";
import VueCookies from 'vue-cookies'
import '@/plugins/apexcharts'
import axios from 'axios'

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
  created () {
    const userString = localStorage.getItem('user') // grab user data from local storage
    if (userString) { // check to see if there is indeed a user
      const userData = JSON.parse(userString) // parse user data into JSON
      this.$store.commit('SET_USER_DATA', userData) // restore user data with Vuex
    }
    axios.interceptors.response.use(
        response => response, // simply return the response
        error => {
          if (error.response.status === 401) { // if we catch a 401 error
            this.$store.dispatch('logout') // force a log out
          }
          return Promise.reject(error) // reject the Promise, with the error as the reason
        }
    )
  },
  render: h => h(App),
  router,
  store: store
}).$mount('#app')
