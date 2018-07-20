import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/common.less'
import Axios from 'axios'

/* import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

Vue.use(VueQuillEditor) */

// http response 拦截器
const axiosInterRes = new Promise((resolve, reject) => {
  Axios.interceptors.response.use(response => {
    let { data } = response || {}

    if (data.data) {
      return data.data
    }

    if (data && data.code === 0) {
      return data.result
    } else {
      reject(data || {})
    }
  }, error => {
    reject(error)
  })
})

axiosInterRes.catch(err => {
  console.error(err)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
