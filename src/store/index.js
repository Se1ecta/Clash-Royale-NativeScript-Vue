import Vue from "vue";
import Vuex from "vuex";

import Cards from "./modules/cards";
import Palyer from "./modules/player";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Cards,
    Palyer,
  },
});
