import { setupLayouts } from 'virtual:generated-layouts'
import { routes as generatedRoutes } from 'vue-router/auto/routes'
import { createRouter, createWebHistory } from 'vue-router'
import { useNProgress } from '@vueuse/integrations/useNProgress'

const { start, done } = useNProgress(0.3)

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(generatedRoutes),
})

router.beforeEach(() => { start() })
router.afterEach(() => { done() })
