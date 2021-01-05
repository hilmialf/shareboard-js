import Vue from 'vue'
import Vuex from 'vuex'
import board from './board'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    board
  }
})

export default store;