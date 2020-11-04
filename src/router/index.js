import Template from '@/pages/Template.vue'
import GlobalParameters from '@/pages/GlobalParameters.vue'
import History from '@/pages/History.vue'
import Welcome from "@/pages/Welcome"
import Profile from "@/pages/Profile";
export default [
    { path: '/', component: Welcome, name: "index" },
    { path: '/templates', component: Template, name: "templates" },
    { path: '/global-parameters', component: GlobalParameters, name: "globalParameters" },
    { path: '/history', component: History, name: "history" },
    { path: '/profile', component: Profile, name: "profile" }

]