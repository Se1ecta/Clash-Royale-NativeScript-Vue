import { http } from "../../plugins/axios";

const Cards = {
  state: {
    cards: {
      data: [],
      error: "",
      status: "",
    },
  },
  actions: {
    async getCards({ commit }) {
      commit("REQUEST_CARDS");
      await http
        .get("/cards")
        .then((res) => {
          const cards = res.data.items;
          commit("SUCCESS_GET_CARDS", cards);
        })
        .catch((err) => {
          commit("ERROR_GET_CARDS", err);
        });
    },
  },
  mutations: {
    REQUEST_CARDS(state) {
      state.cards.status = "loading";
    },
    SUCCESS_GET_CARDS(state, payload) {
      state.cards.data = payload;
      state.cards.status = "success";
    },
    ERROR_GET_CARDS(state, err) {
      state.cards.error = err;
    },
  },
  getters: {
    cards: (state) => state.cards,
  },
};

export default Cards;
