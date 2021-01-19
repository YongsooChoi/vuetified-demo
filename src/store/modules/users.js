import Axios from "axios";
// import { SET_STORE } from "@store/mutation-types";

const state = {
  users: [],
};

const mutations = {
  SET_STORE(state, payload) {
    state.users = payload;
  },
};

const actions = {
  initStore: ({ commit }) => {
    Axios.get("http://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
      commit("SET_STORE", response.data);
    });
  },
};

const getters = {
  users: (state) => state.users,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
