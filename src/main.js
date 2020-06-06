import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import router from './router';
import initStore from './store';
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false
Vue.use(Vuex);

const store = initStore();

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
