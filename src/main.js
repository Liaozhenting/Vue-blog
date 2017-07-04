import Vue from 'vue'
import App from './App'

import axios from 'axios'
Vue.prototype.$http = axios
//引入vue-router

import router from './router/index'

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //h是形参，render渲染根节点
  render: h => h(App)
})
