import { createPinia } from 'pinia'
import type { FunctionPlugin } from 'vue'

// Setup Pinia
// https://pinia.vuejs.org/
export const install: FunctionPlugin = (app) => {
  const pinia = createPinia()
  app.use(pinia)
}
