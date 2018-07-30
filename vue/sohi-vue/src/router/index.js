import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import Hello from '@/components/hello/Hello'
import Html from '@/components/fe/html/Html'
import Css from '@/components/fe/css/Css'
import Others from '@/components/fe/others/Others'

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
          path: 'css',
          component: Css
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
