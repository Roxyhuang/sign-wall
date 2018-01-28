import Vue from 'vue';
import Router from 'vue-router';
import Register from '../views/Register.vue';
import List from '../views/List.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'register',
      component: Register,
    },
    {
      path: '/list',
      name: 'List',
      component: List,
    },
  ],
});