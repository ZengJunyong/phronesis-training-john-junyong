import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/project13',
      name: 'project13',
      component: () => import('../views/Project13.vue')
    },
    {
      path: '/debriefs',
      name: 'debriefs',
      component: () => import('../views/debriefs/Debriefs.vue')
    },
    {
      path: '/debriefs/13',
      name: 'debrief-13',
      component: () => import('../views/debriefs/13/13.vue')
    }
  ]
})

export default router
