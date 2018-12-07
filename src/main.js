import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './assets/css/reset.css' /*引入公共样式*/

import 'babel-polyfill'
import Es6Promise from 'es6-promise'
require('es6-promise').polyfill()

Es6Promise.polyfill()
Vue.config.productionTip = false


Vue.use(iView);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用store
  components: { App },
  template: '<App/>'
})
