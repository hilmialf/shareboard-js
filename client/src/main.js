import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000", { transports: ["websocket"] });
Vue.prototype.$socket = () => socket;

import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  render: h => h(App),
  mounted: function() {
    socket.on("connect", function() {
      console.log("connected to socket!");
    });
  }
}).$mount("#app");
