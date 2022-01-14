import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw
} from 'vue-router'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/terms-and-conditions',
    name: 'terms-and-conditions',
    component: () => import('@/views/TermsAndConditions.vue')
  },
  {
    path: '/my',
    name: 'my-punks',
    component: () => import('@/views/MyPunks.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: from.name === to.name ? 'smooth' : 'auto',
        top: 72 // navbar height
      }
    }
  }
})

export default router
