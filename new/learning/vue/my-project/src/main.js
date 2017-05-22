import Vue from 'vue'
import router from './router/index.js'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import App from './App'

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
