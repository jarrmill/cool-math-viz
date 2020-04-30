import Vue from 'vue';
import Router from 'vue-router'
import Home from './components/Home.vue';
import About from './components/About/About.vue';
import Pemdas from './components/Pemdas/Main.vue';
import PemdasLesson from './components/Pemdas/Lesson.vue';
import PemdasSolve from './components/Pemdas/Solve.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/pemdas',
      name: 'Pemdas',
      component: Pemdas,
      children: [
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: '',
          component: PemdasLesson
        },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'solve',
          component: PemdasSolve
        }
      ]
    }
  ]
})