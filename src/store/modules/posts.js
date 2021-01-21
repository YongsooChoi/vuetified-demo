import Axios from "axios";
import * as types from "@/store/mutation-types";

const state = {
  posts: [],
};

const mutations = {
  [types.SET_POSTS](state, payload) {
    state.posts = payload;
  },
};

const actions = {
  [types.FETCH_POSTS]({ commit }) {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      commit(types.SET_POSTS, response.data);
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
