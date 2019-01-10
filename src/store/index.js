
import Vue from 'vue';
import Vuex from 'vuex';
import Loading from './modules/loading';
Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  /** 註冊你自己的 module */
  modules: {
    Loading,
  },
});