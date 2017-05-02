import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '../components/Hello'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/index',
        name: 'Hello',
        component: Hello
    }]
})
