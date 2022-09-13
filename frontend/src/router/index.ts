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
      path: "/updates/1-setup",
      name: "project-setup",
      component: () => import('../views/updates/One.vue')
    },
    {
      path: "/updates/2-initial",
      name: "initial-code",
      component: () => import('../views/updates/Two.vue')
    }
  ]
})

export default router
