import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
    /* {
      path: '/others',
      redirect: '/others/vuex',
      component: () => import('@/others'),
      children: [
        {
          path: 'vuex',
          component: () => import('@/others/VuexExample/other.vue')
        },
        {
          path: 'mathjs',
          component: () => import('@/others/MathJs')
        }
      ]
    }, */
    {
      path: '*',
      redirect: '/'
    }
  ]
})
