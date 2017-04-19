import Vue from "vue"
import Hello from "./views/hello.vue"

new Vue({
    el: "#app1",
    render: (c) =>c(Hello)
})