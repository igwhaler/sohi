import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import placeHolder from './assets/place-holder.png'
import 'minireset.css'
import './style/common.less'
import {
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Carousel,
  CarouselItem,
  InputNumber,
  Dialog
} from 'element-ui'

Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(DatePicker)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(InputNumber)
Vue.use(Dialog)

Vue.use(VueLazyload, {
  preLoad: 1,
  error: placeHolder,
  loading: placeHolder,
  attempt: 2
})

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
