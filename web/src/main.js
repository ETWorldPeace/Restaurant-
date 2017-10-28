import Vue from 'vue'
import App from './App.vue'
import router from './router/'
import './assets/bootstrap/css/bootstrap.css'
import $ from 'jquery'
import './assets/bootstrap/js/bootstrap.js'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})