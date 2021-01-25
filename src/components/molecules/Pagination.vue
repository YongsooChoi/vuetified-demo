<template>
  <div class="text-center">
    <v-pagination
      v-model="currentPage"
      v-bind:length="pageTotal"
      v-on:input="changePage"
    ></v-pagination>
  </div>
</template>

<script>
export default {
  props: {
    page: { type: Number, default: 1 },
    pageTotal: { type: Number, default: 1 },
  },

  data() {
    return {
      currentPage: this.page,
    };
  },

  methods: {
    changePage(value) {
      this.$emit("changePage", value);
    },
  },
};
</script>

<style lang="scss" scoped></style>
