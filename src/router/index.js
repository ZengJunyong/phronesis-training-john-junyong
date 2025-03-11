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
      path: '/project29',
      name: 'project29',
      component: () => import('../views/Project29.vue')
    },
    {
      path: '/project30',
      name: 'project30',
      component: () => import('../views/Project30.vue')
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
    },
    {
      path: '/debriefs/23',
      name: 'debrief-23',
      component: () => import('../views/debriefs/23/23.vue')
    },
    {
      path: '/debriefs/24',
      name: 'debrief-24',
      component: () => import('../views/debriefs/24/24.vue')
    },
    {
      path: '/debriefs/25',
      name: 'debrief-25',
      component: () => import('../views/debriefs/25/25.vue')
    },
    {
      path: '/debriefs/26',
      name: 'debrief-26',
      component: () => import('../views/debriefs/26/26.vue')
    },
    {
      path: '/debriefs/27',
      name: 'debrief-27',
      component: () => import('../views/debriefs/27/27.vue')
    },
    {
      path: '/debriefs/28',
      name: 'debrief-28',
      component: () => import('../views/debriefs/28/28.vue')
    },
    {
      path: '/debriefs/29',
      name: 'debrief-29',
      component: () => import('../views/debriefs/29/29.vue')
    },
    {
      path: '/debriefs/30',
      name: 'debrief-30',
      component: () => import('../views/debriefs/30/30.vue')
    }
  ]
})

export default router
