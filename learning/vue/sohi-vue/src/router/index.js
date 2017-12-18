import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import Hello from '@/components/hello/Hello'
import Html from '@/components/fe/Html'
import Others from '@/components/fe/Others'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: 'hello',
          alias: ['', 'index'],
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
