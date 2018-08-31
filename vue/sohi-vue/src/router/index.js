import Vue from 'vue'
import Router from 'vue-router'
import ViewContainer from '@/view'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/flex',
      component: ViewContainer,
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
