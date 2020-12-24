import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// .vue文件中的template是谁处理的
// 由vue-template-compiler
// render -> vdom -> UI