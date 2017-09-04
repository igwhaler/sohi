import Vue from 'vue'
import App from './App'
import router from './router'
import 'normalize.css'
import 'element-ui/lib/theme-default/index.css'

import {
  Button,
  Input
} from 'element-ui'

Vue.use(Button)
Vue.use(Input)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
