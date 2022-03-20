import { http } from "../../plugins/axios";

const Player = {
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

      await http
        .get(`/players/%23${tag}`)
        .then((res) => {
          const player = res.data;
          commit("SUCCESS_GET_PLAYER", player);
        })
        .catch((err) => {
          commit("ERROR_GET_PLAYER", err);
        });
    },
  },
  mutations: {
    REQUEST_PLAYER(state) {
      state.player.status = "loading";
    },
    ERROR_GET_PLAYER(state, err) {
      state.player.status = "error";
      if (err.response.status === 404) {
        state.player.error = "Player not founded";
        return;
      }
      state.player.error = err;
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

export default Player;
