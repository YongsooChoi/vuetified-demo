import Axios from "axios";
import * as types from "@/store/mutation-types";

const state = {
  users: [],
};

const mutations = {
  [types.SET_STORE](state, payload) {
    state.users = payload;
  },
};

const actions = {
  initStore: ({ commit }) => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
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
