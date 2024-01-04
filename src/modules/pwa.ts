import type { FunctionPlugin } from 'vue'
import { router } from './router'

// https://github.com/antfu/vite-plugin-pwa#automatic-reload-when-new-content-available
export const install: FunctionPlugin = () => {
  router.isReady()
    .then(async () => {
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({ immediate: true })
    })
    .catch(() => { })
}
