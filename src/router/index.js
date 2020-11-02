import Template from '@/Template.vue'
import GlobalParameters from '@/GlobalParameters.vue'
import History from '@/History.vue'
import Welcome from "@/Welcome";
export default [
    { path: '/', component: Welcome, name: "index" },
    { path: '/templates', component: Template, name: "templates" },
    { path: '/global-parameters', component: GlobalParameters, name: "globalParameters" },
    { path: '/history', component: History, name: "history" }
]