import { createApp } from 'vue'
import './../src/assets/css/main.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"
import App from './App.vue'
import {onMounted} from 'vue'
import { createPinia } from 'pinia'
import { createRouter, createWebHistory } from 'vue-router'
import TodosComponent from './components/routers-components/TodosComponent.vue'
import FilesComponent from './components/routers-components/FilesComponent.vue'
import NewsComponent from './components/routers-components/NewsComponent.vue'
import NotesComponent from './components/routers-components/NotesComponent.vue'
// import axios from 'axios'





const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: TodosComponent,
        //    name: 'Todos'
        },
        {
            path: '/TodosComponent',
            component: TodosComponent,
            name: 'Todos'
        },
        {
            path: '/FilesComponent',
            component: FilesComponent,
            name: 'Files',
        },
        {
            path: '/NewsComponent',
            component: NewsComponent,
            name: 'News'
        },
        {
            path: '/NotesComponent',
            component: NotesComponent,
            name: 'Notes'
        }



    ]
})




const app = createApp(App)
app.use(router)
app.use(Toast)
app.use(createPinia())
app.mount('#app')
