import Vue from 'vue';
const About = require('./views/about.vue');

new Vue({
    el: '#app',
    render: h => h(About)
});