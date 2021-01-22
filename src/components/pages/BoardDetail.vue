<template>
  <div>
    <h2>{{ id }}번 게시물 상세</h2>
    {{ detail }}
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    id() {
      return this.$route.params.id;
    },
    detail() {
      return this.$store.getters.posts.filter((post) => post.id === this.id);
      // return this.$store.getters.posts;
    },
  },
};
</script>

<style lang="scss" scoped></style>
