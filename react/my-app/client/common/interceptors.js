import Axios from 'axios';

Axios.interceptors.response.use(response => {
    console.log(response)

    return response
}, error => {
    console.log(error)

    return Promise.reject(error);
})

