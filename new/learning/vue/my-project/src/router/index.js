import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/Index'
import Guide from '../pages/Guide'
import More from '../pages/More'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'Index',
      path: '/index',
      alias: '/',
      component: Index
    },
    {
      name: 'Guide',
      path: '/guide',
      component: Guide
    },
    {
      name: 'More',
      path: '/more',
      component: More
    }
  ]
})
