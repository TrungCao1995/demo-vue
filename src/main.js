import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import store from './store'
import router from './routes'

axios.defaults.baseURL = 'https://fdsfdsfas-13381-default-rtdb.firebaseio.com'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
