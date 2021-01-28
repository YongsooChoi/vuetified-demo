import Axios from "axios";
import {
  SET_POSTS,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
} from "@/store/mutation-types";
import * as action_types from "@/store/action-types";

const state = {
  id: 1000,
  posts: [],
};

const mutations = {
  [SET_POSTS](state, payload) {
    state.posts = payload;
  },

  [CREATE_POST](state, payload) {
    state.posts.push({
      id: state.id,
      title: payload.title,
      body: payload.contents,
      email: payload.email,
      terms: payload.terms,
      deleted: false,
    });
    state.id += 1;
  },

  [DELETE_POST](state, payload) {
    state.posts = state.posts.map((post) => {
      if (post.id === payload.id) {
        post.deleted = true;
      }
      return post;
    });
  },

  [UPDATE_POST](state, payload) {
    state.posts = state.posts.map((post) => {
      if (post.id === payload.id) {
        post = { ...post, ...payload.post };
      }
      return post;
    });
  },
};

const actions = {
  [action_types.FETCH_POSTS]({ commit }) {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      commit(
        SET_POSTS,
        response.data.map((item) => {
          return { ...item, deleted: false };
        })
      );
    });
  },
};

const getters = {
  id: (state) => state.id,
  posts: (state) =>
    state.posts.filter((post) => post.deleted == false).reverse(),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
