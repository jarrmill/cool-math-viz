import Vue from 'vue';
import Router from 'vue-router'
import Home from './components/Home.vue';
import About from './components/About/About.vue';
import Pemdas from './components/Pemdas/Main.vue';
import PemdasLesson from './components/Pemdas/Lesson.vue';
import PemdasSolve from './components/Pemdas/Solve.vue';
import Learn from './components/Learn/Learn.vue';
import Classic from './components/Learn/Classic.vue';
import Mode from './components/Learn/Mode.vue';

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
          path: '',
          component: PemdasLesson
        },
        {
          path: 'solve',
          component: PemdasSolve
        }
      ]
    },
    {
      path: '/learn/:lesson',
      name: 'Learn',
      component: Learn,
      props: true,
      children: [
        {
          path: '',
          name: 'Choose',
          component: Mode,
        },
        {
          path: 'classic',
          name: 'Classic',
          component: Classic,
        },
      ]
    }
  ]
})