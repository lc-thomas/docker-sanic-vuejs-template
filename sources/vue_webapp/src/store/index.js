import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    style: {
      
    },
  },
  mutations: {
    toggleLoading(state){
      state.loading = !state.loading
    }
  },
  actions: {
    toggleLoading({commit}){
      commit('toggleLoading')
    }
  },
  modules: {}
});
