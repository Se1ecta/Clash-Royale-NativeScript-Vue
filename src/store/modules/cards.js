import { http } from "../../plugins/axios";

const Cards = {
  state:{
    cards:{
        data: [],
        error: '',

    }
  },
  actions: {
    async getCards({ commit }) {
      commit("REQUEST_CARDS")
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
    SUCCESS_GET_CARDS(state, pyaload) {
      state.cards.data = pyaload;
      state.cards.staus = "success"
    },
    ERROR_GET_CARDS(state, err) {
      state.cards.error = err
    },
    REQUEST_CARDS(state){
        state.cards.status = "loading"
    }
  },
  getters:{
      cards: state => state.cards
  }
};

export default Cards;
