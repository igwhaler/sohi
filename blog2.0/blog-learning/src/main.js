import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import NewHome from './components/edit/Home'
import NewQuestionare from './components/edit/New'
import Questionare from './components/questionare/Questionare'
import Edit from './components/edit/Edit'
import Login from './components/login/Login'
import VueValidator from 'vue-validator'
import Layout from './components/layout/Layout'

Vue.use(VueValidator)
Vue.use(VueRouter)

Vue.validator('latin', function (val) {
  return !val.match(/[^a-zA-Z0-9_]/)
})
Vue.validator('email', function (val) {
  let pattern = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i
  return pattern.test(val)
})
Vue.filter('camelCaseToDash', function (value) {
  return value.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
})

const router = new VueRouter({
  history: true,
  saveScrollPosition: true
})
router.map({
  '/platform': {
    component: Layout,
    subRoutes: {
      '/questionare': {
        component: Questionare
      },
      '/new': {
        component: NewHome,
        subRoutes: {
          '/': {
            component: NewQuestionare
          },
          '/edit': {
            component: Edit
          }
        }
      }
    }
  },
  '/login': {
    component: Login
  }
})
router.redirect({
  '/': '/platform/questionare',
  '/platform': '/platform/questionare'
})
router.start(App, 'body')
exports.router = router
