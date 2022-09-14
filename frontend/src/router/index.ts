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
      path: "/play",
      name: "play",
      component: () => import('../views/PlayView.vue')
    },
    {
      path: "/updates/1-setup",
      name: "update-1",
      component: () => import('../views/updates/One.vue')
    },
    {
      path: "/updates/2-initial",
      name: "update-2",
      component: () => import('../views/updates/Two.vue')
    },
    {
      path: "/updates/3-board",
      name: "update-3",
      component: () => import('../views/updates/Three.vue')
    }
  ]
})

export default router
