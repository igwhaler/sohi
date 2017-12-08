import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

// import Youpin from '../config/Youpin'

import HomePage from '../components/HomePage/HomePage'
import GoodList from '../components/GoodList/GoodList'
import UserCenter from '../components/UserCenter/UserCenter'
import MyOrders from '../components/MyOrders/MyOrders'
import MyCart from '../components/MyCart/MyCart'
import PayPage from '../components/PayPage/PayPage'

Vue.use(Router)
Vue.use(VueResource)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      children: [
        {
          path: 'goodlist',
          name: 'goodlist',
          alias: ['', 'index'],
          component: GoodList
        },
        {
          path: 'user',
          name: 'user',
          component: UserCenter,
          redirect: 'user/orders',
          children: [
            {
              name: 'mycart',
              path: 'cart',
              meta: {
                isLogin: true
              },
              component: MyCart
            },
            {
              name: 'myorder',
              path: 'orders',
              meta: {
                isLogin: true
              },
              component: MyOrders
            }
          ]
        },
        {
          path: 'pay',
          name: 'pay',
          meta: {
            isLogin: true
          },
          component: PayPage
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  next()
  let {isLogin} = to.meta
  console.log('isLogin', isLogin)
})

export default router
