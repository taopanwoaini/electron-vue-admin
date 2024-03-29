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
    path: '/home',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'home',
        component: () => import('@/views/dashboard/index'),
        meta: {
          title: 'Home',
          // icon: 'el-icon-star-on'
        }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: {
          title: 'Form'
        }
      }
    ]
  },

  {
    path: '/form2',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form2',
        component: () => import('@/views/form/index'),
        meta: {
          title: 'Form2'
        }
      }
    ]
  },

  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

