import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './stlye/app.less';

new Vue({
  el: '#root',
  router,
  // template: '<App/>',
  // components: { App }
  render: h => h(App)
});