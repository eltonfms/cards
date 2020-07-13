import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


/*
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Details from './components/Details.vue';
import Styleguide from './components/Details.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Details },
    { path: '/styleguide', component: Styleguide }
  ]
});
*/