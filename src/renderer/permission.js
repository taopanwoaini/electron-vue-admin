import router from './router'
import store from './store'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式
import { Message } from 'element-ui'

const whiteList = [
  '/login'
] // 不重定向白名单

router.beforeEach((to, from, next) => {
  // NProgress.start()

  console.log('to',to)
  console.log('n:', 1)
  //store.getters.token
  if (true) {
    if (to.path === '/login') {
      console.log('n:', 2)
      next({ path: '/' })
      // NProgress.done() // if current page is dashboard will not trigger	afterEach hook, so manually handle it
    } else {
      console.log('n:', 3)
      // if (store.getters.roles.length === 0) {
      //   store.dispatch('GetInfo').then(res => { // 拉取用户信息
      //     next()
      //   }).catch((err) => {
      //     store.dispatch('FedLogOut').then(() => {
      //       Message.error(err || 'Verification failed, please login again')
      //       next({ path: '/' })
      //     })
      //   })
      // } else {
      //   next()
      // }
      next()
    }
  } else {
    console.log('n:', 4)
    // if (whiteList.indexOf(to.path) !== -1) {
    //   next()
    // } else {
    //   next('/login')
    //   NProgress.done()
    // }
    next()
  }

})

router.afterEach(() => {
  NProgress.done() // 结束Progress
})
