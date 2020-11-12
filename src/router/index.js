import Vue from 'vue'
import VueRouter from 'vue-router'
import Template from '@/pages/Template.vue'
import GlobalParameters from '@/pages/GlobalParameters.vue'
import History from '@/pages/History.vue'
import Welcome from "@/pages/Login"
import Profile from "@/pages/Profile"
import Statistics from "@/pages/Statistics";
Vue.use(VueRouter)

export default new VueRouter({
    routes: [
    { path: '/', component: Welcome, name: "index" },
    { path: '/templates', component: Template, name: "templates" },
    { path: '/global-parameters', component: GlobalParameters, name: "globalParameters" },
    { path: '/history', component: History, name: "history" },
    { path: '/profile', component: Profile, name: "profile" },
    { path: '/statistics', component: Statistics, name: "statistics" }

],
    mode: 'history'
});
