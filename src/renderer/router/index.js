import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layout/Layout'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    hidden: true,
    redirect: '/home/index'
  },

  {
    path: '/home',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'home',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: 'Home',
        }
      }
    ]
  },

  {
    path: '*',
    redirect: '/home/index',
    hidden: true
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

