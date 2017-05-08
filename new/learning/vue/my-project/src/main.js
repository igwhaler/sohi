import Vue from 'vue'
import router from './router/index.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: `<router-view></router-view>`
})
