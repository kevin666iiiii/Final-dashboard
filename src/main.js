import Vue from 'vue'
import App from './App.vue'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import router from "./router"

import axios from 'axios';


Vue.use(Antd);
Vue.config.productionTip = false
Vue.prototype.$axios =axios;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
