import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/project12',
      name: 'project12',
      component: () => import('../views/Project12.vue')
    },
    {
      path: '/debriefs',
      name: 'debriefs',
      component: () => import('../views/Debriefs.vue')
    }
  ]
})

export default router
