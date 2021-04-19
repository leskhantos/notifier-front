import Vue from 'vue'
import Router from 'vue-router'
import Template from '@/pages/Template.vue'
import GlobalParameters from '@/pages/GlobalParameters.vue'
import History from '@/pages/History.vue'
import Login from "@/pages/Login"
import Profile from "@/pages/Profile"
import Statistics from "@/pages/Statistics";
Vue.use(Router)

const router = new Router({
    base: process.env.BASE_URL,
    routes: [
    { path: '/', component: Login, name: "index" },
    { path: '/templates', component: Template, name: "templates" },
    { path: '/global-parameters', component: GlobalParameters, name: "globalParameters" },
    { path: '/history', component: History, name: "history" },
    { path: '/profile', component: Profile, name: "profile" },
    { path: '/statistics', component: Statistics, name: "statistics" }

],
    mode: 'history'
});

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('user')
    if (to.matched.some(record => record.meta.requiresAuth) && !loggedIn) {
        next('/')
    }
    next()
})
export default router
