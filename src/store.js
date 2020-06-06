import Vuex from 'vuex';
import Vue from 'vue';

const initStore = () => new Vuex.Store({
  state: {
    _id: 1234,
    user: {},
    modules: {

    }
  },
  actions: {
    addEntriesToModule(context, entry) {
      const { date, score, module } = entry;
      if ( context.store.modules[module]) {
        Vue.set(context.store.modules[module], 'entries', { date, score});
      } else {
        context.store.modules[module].entries[date] = score;
      }
    }
  }
})

export default initStore;