import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errorToast: {
      show: false,
      text: '',
    },
    infoToast: {
      show: false,
      text: '',
    },
    empresas: [],
  },
  mutations: {
    showToast(store, payload) {
      switch (payload.type) {
        case 'error':
          store.errorToast.show = true;
          store.errorToast.text = payload.text;
          break;
        case 'info':
          store.infoToast.show = true;
          store.infoToast.text = payload.text;
          break;
      }
    },
    setEmpresas(state, payload) {
      state.empresas = payload;
    }
  },
  actions: {},
  modules: {}
});
