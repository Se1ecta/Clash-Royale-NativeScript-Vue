import { http } from "../../plugins/axios";

const Cards = {
  state:{
    cards: [],
  },
  actions: {
    async getCards({ commit }) {
      console.log("getcars");
      await http
        .get("/cards")
        .then((res) => {
          const cards = res;
          commit("SUCCESS_GET_CARDS", cards);
        })
        .catch((err) => {
          commit("ERROR_GET_CARDS", err);
        });
    },
  },
  mutations: {
    SUCCESS_GET_CARDS(state, pyaload) {
      console.log(pyaload);
      state.cards = pyaload;
    },
    ERROR_GET_CARDS(state, err) {
      console.log(err);
    },
  },
};

export default Cards;
