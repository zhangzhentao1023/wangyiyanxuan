import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import 'lib-flexible/flexible.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
   router
 }).$mount('#app')

/* new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, // 配置路由器
}) */