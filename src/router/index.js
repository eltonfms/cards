import Vue from 'vue';
import Router from 'vue-router';
import Details from './../components/Details.vue';
import Styleguide from './../components/Styleguide.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Details
    },
    {
      path: '/styleguide',
      component: Styleguide
    },
  ]
});