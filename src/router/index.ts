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
    path: '/terms-and-condition',
    name: 'terms-and-condition',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Taq.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to: RouteLocationNormalized, from: RouteLocationNormalized) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: from.name === to.name ? 'smooth' : 'auto'
      }
    }
  }
})

export default router
