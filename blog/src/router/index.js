import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/view'
import HomePage from '@/view/HomePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/index',
      component: Index,
      children: [
        {
          path: 'index',
          name: 'HomePage',
          alias: [''],
          component: HomePage
        }
      ]
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
