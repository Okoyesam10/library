import { createApp } from 'vue'
import library from './library'
import App from './App.vue'

createApp(App)
.use(library)
.mount('#app')
