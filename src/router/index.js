import Template from '../Template.vue'
import GlobalParameters from '../GlobalParameters.vue'
import History from '../History.vue'
export default [
    { path: '/templates', component: Template, name: "templates" },
    { path: '/global-parameters', component: GlobalParameters, name: "globalParameters" },
    { path: '/history', component: History, name: "History" }
]