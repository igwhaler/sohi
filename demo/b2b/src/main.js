import Vue from 'vue'
import App from './App'
import router from './router'
import 'minireset.css'
import './style/common.less'
import {
  Autocomplete,
  Carousel,
  CarouselItem
} from 'element-ui'

Vue.config.productionTip = false

Vue.use(Autocomplete)
Vue.use(Carousel)
Vue.use(CarouselItem)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
