<template>
  <v-expansion-panels focusable>
    <v-expansion-panel v-for="item in lists" :key="item.id">
      <v-expansion-panel-header>{{ item.title }}</v-expansion-panel-header>
      <v-expansion-panel-content>
        {{ item.body }}
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  props: ["lists"],
  computed: {},
};
</script>

<style lang="scss" scoped></style>
