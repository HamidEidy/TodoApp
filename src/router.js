import { createRouter, createWebHistory } from 'vue-router';
import TodosComponent from './components/routers-components/TodosComponent.vue';
import FilesComponent from './components/routers-components/FilesComponent.vue';
import NewsComponent from './components/routers-components/NewsComponent.vue';
import NotesComponent from './components/routers-components/NotesComponent.vue';

const routes = [
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
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;