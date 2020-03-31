import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Storte from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
// 设置rem的基准值
import 'amfe-flexible'
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  Storte,
  router,
  render: h => h(App)
}).$mount('#app')
