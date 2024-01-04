import { setupLayouts } from 'virtual:generated-layouts'
import { createApp } from 'vue'

// import Previewer from 'virtual:vue-component-preview'
import { routes as generatedRoutes } from 'vue-router/auto/routes'
import { createRouter, createWebHistory } from 'vue-router'
import messages from '@intlify/unplugin-vue-i18n/messages'

import { createHead } from '@vueuse/head'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'

// Styles
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(generatedRoutes),
})

const i18n = createI18n({
  locale: 'en',
  messages,
})

const head = createHead()
const pinia = createPinia()
const app = createApp(App)

app.use(router)
app.use(head)
app.use(pinia)
app.use(i18n)

app.mount('#app')
