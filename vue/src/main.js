import { createApp } from 'vue'
import library from './library'
import router from './router'
import './index.css'
import App from './App.vue'

createApp(App)
.use(library)
.mount('#app')
.use(router)
