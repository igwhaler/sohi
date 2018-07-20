import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      redirect: '/index',
      component: () => import('@/view'),
      children: [
        {
          path: 'index',
          name: 'HomePage',
          alias: [''],
          component: () => import('@/view/HomePage')
        },
        {
          path: 'article',
          name: 'ArtDetail',
          component: () => import('@/view/ArtDetail')
        }
      ]
    },
    {
      path: '/admin',
      component: () => import('@/view/AdminPage')
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
