import Vue from "vue";
import Vuex from "vuex";
import global from "./global";
import board from "./board";
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    global,
    board
  }
});

export default store;
