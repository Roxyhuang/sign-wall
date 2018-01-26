import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './stlye/app.less';

new Vue({
  el: '#root',
  router,
  render: h => h(App)
});