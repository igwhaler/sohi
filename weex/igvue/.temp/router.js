import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Home from '@/views/Home'
import Art from '@/views/Art'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/art',
      name: 'Art',
      component: Art
    }
  ]
})
