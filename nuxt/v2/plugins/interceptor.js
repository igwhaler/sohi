import Axios from 'axios'

// http response 拦截器
const axiosInterRes = new Promise((resolve, reject) => {
  Axios.interceptors.response.use(response => {
    let { data } = response || {}

    if (data && data.data) {
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
