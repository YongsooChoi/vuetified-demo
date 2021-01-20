<template>
  <div>
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

        <v-list-item link to="/profile">
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
        <v-list-item
          v-for="menu in menus"
          v-bind:key="menu.id"
          v-bind:to="menu.path"
        >
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ menu.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  props: ["profile", "menus"],
};
</script>

<style lang="scss" scoped></style>
