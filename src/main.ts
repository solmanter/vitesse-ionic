import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import { router } from './modules/router'

import * as i18n from './modules/i18n'
import * as pinia from './modules/pinia'
import * as pwa from './modules/pwa'

import App from './App.vue'

// Styles
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const head = createHead()
const app = createApp(App)

app.use(router)
app.use(head)
app.use(pinia)
app.use(i18n)
app.use(pwa)

app.mount('#app')
