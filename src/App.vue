<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar> -->

    <v-navigation-drawer
      app
      dark
      permanent
      mini-variant
      expand-on-hover
      stateless
      disable-resize-watcher
    >
      <!-- <v-navigation-drawer app dark permanent> -->
      <v-list>
        <v-list-item class="px-2">
          <v-list-item-avatar>
            <v-img src="https://randomuser.me/api/portraits/men/3.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              <!-- {{ profile.name_eng }}<br /> -->
              {{ profile.name }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ profile.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <!-- <v-list-item v-for="menu in menusWithBaseURL" v-bind:key="menu.id"> -->
        <v-list-item v-for="menu in menus" v-bind:key="menu.id">
          <router-link v-bind:to="menu.path">
            <v-list-item-icon>
              <v-icon>mdi-folder</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <!-- <HelloWorld/> -->
      <router-view></router-view>
    </v-main>

    <v-footer app>last updated: {{ getCurrentTime }}</v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    profile: {
      name: "최용수",
      name_eng: "Yongsoo Choi",
      email: "yongsoochoi@hnine.com",
    },
    menus: [
      { id: 0, title: "Profile", path: "profile" },
      { id: 1, title: "Post", path: "post" },
      { id: 2, title: "Board", path: "board" },
      { id: 3, title: "Demo", path: "demo" },
    ],
  }),

  computed: {
    getCurrentTime() {
      return new Date(Date.now());
      // return new Date(Date.now()).toDateString();
      // return new Date(Date.now()).toLocaleDateString();
    },
    menusWithBaseURL() {
      console.log(process.env.BASE_URL);
      return this.menus.map((menu) => {
        return { ...menu, path: process.env.BASE_URL + menu.path };
      });
    },
  },
};
</script>
