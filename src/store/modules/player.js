import { http } from "../../plugins/axios";

const Cards = {
  state: {
    player: {
      data: {},
      error: "",
      status: "",
    },
  },
  actions: {
    async getPlayer({ commit }, tag) {
      commit("REQUEST_PLAYER");
      console.log(`/players/%23${tag}`)
      await http
        .get(`/players/%23${tag}`)
        .then((res) => {
          const player = res.data;
          console.log(res.data);
          commit("SUCCESS_GET_PLAYER", player);
        })
        .catch((err) => {
          commit("ERROR_GET_PLAYER", err);
          console.log(err);
        });
    },
  },
  mutations: {
    REQUEST_PLAYER(state) {
      state.player.status = "loading";
    },
    ERROR_GET_PLAYER(state, payload) {
      state.player.status = "error";
      state.player.error = payload;
    },
    SUCCESS_GET_PLAYER(state, payload) {
      state.player.data = payload;
      state.player.status = "success";
    },
  },
  getters: {
    player: (state) => state.player,
  },
};

export default Cards;
