import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Storte from './store'

Vue.config.productionTip = false

new Vue({
  Storte,
  router,
  render: h => h(App)
}).$mount('#app')
