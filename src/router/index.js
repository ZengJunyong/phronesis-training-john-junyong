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
    },
    {
      path: '/debriefs/14',
      name: 'debrief-14',
      component: () => import('../views/debriefs/14/14.vue')
    },
    {
      path: '/debriefs/15',
      name: 'debrief-15',
      component: () => import('../views/debriefs/15/15.vue')
    }
  ]
})

export default router
