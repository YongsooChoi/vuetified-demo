import Axios from "axios";
import * as mutation_types from "@/store/mutation-types";
import * as action_types from "@/store/action-types";

const state = {
  posts: [],
};

const mutations = {
  [mutation_types.SET_POSTS](state, payload) {
    state.posts = payload;
  },
};

const actions = {
  [action_types.FETCH_POSTS]({ commit }) {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      commit(mutation_types.SET_POSTS, response.data);
    });
  },
};

const getters = {
  posts: (state) => state.posts,
};

export default {
  state,
  getters,
  actions,
  mutations,
};
