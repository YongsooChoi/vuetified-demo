import Axios from "axios";
import * as mutation_types from "@/store/mutation-types";
import * as action_types from "@/store/action-types";

const state = {
  users: [],
};

const mutations = {
  [mutation_types.SET_STORE](state, payload) {
    state.users = payload;
  },
};

const actions = {
  [action_types.initStore]({ commit }) {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      commit(mutation_types.SET_STORE, response.data);
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
