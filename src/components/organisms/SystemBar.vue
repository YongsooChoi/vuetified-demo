<template>
  <v-system-bar v-if="showSystemBar" app window
    ><v-icon>mdi-message</v-icon><span>2 unread messages</span
    ><v-spacer></v-spacer
    ><v-icon v-on:click="onClose">mdi-close</v-icon></v-system-bar
  >
</template>

<script>
export default {
  props: ["showSystemBar"],
  methods: {
    onClose() {
      this.$emit("closeSystemBar");
    },
  },
};
</script>

<style lang="scss" scoped></style>
