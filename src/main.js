import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store/index.js'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

axios.defaults.baseURL = "http://localhost:4536";

Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false






new Vue({
  components: { App },
  router,
  store,
  render:h=>h(App),
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
  mounted(){
  }
}).$mount('#app')





