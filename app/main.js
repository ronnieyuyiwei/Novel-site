/**
 * Created by YYW on 2016/10/28.
 */
//main.js
// var style=require( '../public/scss/test.scss');
// var greet = require( './hello.js');

 // require('../public/stylesheets/test.css')
// require( '../public/scss/test.scss')
// // require('../public/javascripts/ES6')
// // require('../public/javascripts/test')
// import '../public/javascripts/ES6'
// import '../public/javascripts/test'
import Vue from "../node_modules/vue/dist/vue.min";
import App from '../public/components/app.vue';
new Vue({
    el: '#app',
    render: h => h(App)
})
