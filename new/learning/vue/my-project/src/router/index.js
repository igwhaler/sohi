import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index'
import Ele from '../pages/Ele'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Index',
      path: '/index',
      alias: [''],
      component: Index
    },
    {
      name: 'ele',
      path: '/ele',
      component: Ele
    },
    {
      name: 'NotFound',
      path: '*',
      component: {
        template: '<h2>404</h2>'
      }
    }
  ]
})
