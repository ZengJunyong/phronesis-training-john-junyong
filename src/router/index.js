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
      path: '/project16',
      name: 'project16',
      component: () => import('../views/Project16.vue')
    },
    {
      path: '/project20',
      name: 'project20',
      component: () => import('../views/Project20.vue')
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
    },
    {
      path: '/debriefs/16',
      name: 'debrief-16',
      component: () => import('../views/debriefs/16/16.vue')
    },
    {
      path: '/debriefs/17',
      name: 'debrief-17',
      component: () => import('../views/debriefs/17/17.vue')
    },
    {
      path: '/debriefs/18',
      name: 'debrief-18',
      component: () => import('../views/debriefs/18/18.vue')
    },
    {
      path: '/debriefs/19',
      name: 'debrief-19',
      component: () => import('../views/debriefs/19/19.vue')
    },
    {
      path: '/debriefs/20',
      name: 'debrief-20',
      component: () => import('../views/debriefs/20/20.vue')
    },
    {
      path: '/debriefs/21',
      name: 'debrief-21',
      component: () => import('../views/debriefs/21/21.vue')
    },
    {
      path: '/debriefs/22',
      name: 'debrief-22',
      component: () => import('../views/debriefs/22/22.vue')
    }
  ]
})

export default router
