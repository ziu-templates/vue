import Vue from 'vue';
import App from './App';
import store from './vuex';
import router from './router';

Vue.config.productionTip = false;
Vue.config.devtools = process.env.NODE_ENV === 'development';
/* eslint-disable no-new */
/*
 * 启动vue
 * */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
