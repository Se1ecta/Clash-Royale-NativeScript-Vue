import { http } from "../../plugins/axios";
const GloabalTournaments = {
  state: {
    tournaments: [],
  },
  actions: {
    async getTournaments({ commit }) {
      http
        .get("/globaltournaments")
        .then((res) => {
          const tournaments = res.data.items;
          commit("SUCCESS_GET_TOURNAMENTS", tournaments);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mutations: {
    SUCCESS_GET_TOURNAMENTS(state, pyaload) {
      state.tournaments = pyaload;
    },
  },
  getters: {},
};

export default GloabalTournaments;
