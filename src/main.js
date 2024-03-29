import Vue from 'vue'

import 'normalize.css/normalize.css' // A modern alternative to CSS resets
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import 'mavon-editor/dist/css/index.css'

import '@/styles/index.scss' // global css

import App from './App'
import router from './router/routers'
import permission from './components/permission'
import store from './store'
import echarts from 'echarts'

import '@/icons' // icon
import './router/index' // permission control

Vue.use(permission)
Vue.use(ElementUI, { locale })
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
require('babel-polyfill')

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
