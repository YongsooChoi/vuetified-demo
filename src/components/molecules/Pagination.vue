<template>
  <div class="text-center">
    <v-pagination v-model="page" v-bind:length="totalPages"></v-pagination>
  </div>
</template>

<script>
export default {
  props: {
    page: { type: Number, default: 1 },
    totalPages: { type: Number, default: 1 },
  },
};
</script>

<style lang="scss" scoped></style>
