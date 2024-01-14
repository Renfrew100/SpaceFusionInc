import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/goalofcollaboration',
      name: 'goalofcollaboration',
      component: () => import('../views/GoalOfCollaboration.vue')
    },
    {
    path: '/solution',
    name: 'solution',
    component: () => import('../views/Solution.vue')
    },
    {
      path: '/relevance',
      name: 'relevance',
      component: () => import('../views/Relevance.vue')
    }
  ]
})

export default router
