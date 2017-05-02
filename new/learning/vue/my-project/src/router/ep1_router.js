import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/ep1",
            name: "ep1",
            components: {
                template: `<h1>ep1</h1>`
            }
        }
    ]
})