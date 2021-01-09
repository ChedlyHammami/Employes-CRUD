import Vue from 'vue'
import VueRouter from 'vue-router'
import ListEmploye from '../views/ListEmploye.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ListEmploye',
    component: ListEmploye
  },
  {
    path: '/addEmploye',
    name: 'AddEmploye',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PageForAdd.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
