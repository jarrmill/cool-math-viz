import Vue from 'vue';
import Router from 'vue-router'
import Home from './components/Home.vue';
import Pemdas from './components/Pemdas/Main.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pemdas',
      name: 'Pemdas',
      component: Pemdas
    }
  ]
})