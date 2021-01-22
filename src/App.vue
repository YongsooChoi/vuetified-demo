<template>
  <v-app>
    <navigation-drawer :profile="profile" :menus="menus" />

    <v-main style="margin: 100px">
      <router-view></router-view>
    </v-main>

    <v-footer app>last rendered: {{ getCurrentTime }}</v-footer>
    <system-bar
      v-bind:showSystemBar="showSystemBar"
      v-on:closeSystemBar="() => (showSystemBar = false)"
    />
  </v-app>
</template>

<script>
import NavigationDrawer from "@/components/organisms/NavigationDrawer";
import SystemBar from "@/components/organisms/SystemBar";
import * as action_types from "@/store/action-types";

export default {
  name: "App",

  components: { NavigationDrawer, SystemBar },

  data: () => ({
    profile: {
      name: "최용수",
      name_eng: "Yongsoo Choi",
      email: "yongsoochoi@hnine.com",
    },
    menus: [
      { id: 0, title: "Main", path: "/" },
      // { id: 1, title: "Profile", path: "profile" },
      // { id: 2, title: "Post", path: "post" },
      { id: 3, title: "Board", path: "/board" },
      { id: 4, title: "Demo", path: "/demo" },
    ],
    showSystemBar: true,
  }),

  computed: {
    getCurrentTime() {
      return new Date(Date.now());
      // return new Date(Date.now()).toDateString();
      // return new Date(Date.now()).toLocaleDateString();
    },
    // menusWithBaseURL() {
    //   console.log(process.env.BASE_URL);
    //   return this.menus.map((menu) => {
    //     return { ...menu, path: process.env.BASE_URL + menu.path };
    //   });
    // },
  },

  created() {
    console.log(this.$route);
    // this.$store.dispatch("initStore");
    this.$store.dispatch(action_types.FETCH_POSTS);
  },
};
</script>
