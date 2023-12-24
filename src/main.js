import { createApp } from 'vue'
import './../src/assets/css/main.css'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css"
import router from './router.js';
import App from './App.vue'
import { createPinia } from 'pinia'
const app = createApp(App)
app.use(router)
app.use(Toast)
app.use(createPinia())
app.mount('#app')
