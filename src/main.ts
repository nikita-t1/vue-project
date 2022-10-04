import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./routes"
import { createHead } from '@vueuse/head'


import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'preline'
import './style.css'

const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(createHead())
app.use(pinia)
app.mount('#app')
