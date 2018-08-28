import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/flex',
      component: () => import('@/view'),
      children: [
        {
          path: 'flex',
          name: 'Flex',
          component: () => import('@/view/Flex/index.vue')
        }
      ]
    },
    {
      path: '/ohters',
      component: {
        template: '<p>ohters</p>'
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
