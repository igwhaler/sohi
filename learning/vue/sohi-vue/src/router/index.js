import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Hello from '@/components/hello/Hello'
import Html from '@/components/fe/Html'
import Others from '@/components/fe/Others'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: '/index',
      children: [
        {
          path: 'index',
          component: Hello
        },
        {
          path: 'html',
          component: Html
        },
        {
          path: 'others',
          component: Others
        }
      ]
    },
    {
      path: '/*',
      component: {
        template: `<h1>404</h1>`
      }
    }
  ]
})
