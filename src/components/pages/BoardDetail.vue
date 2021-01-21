<template>
  <div>{{ $route.params.id }} 게시물 상세</div>
</template>

<script>
export default {
  // created: {}
  // computed: {
  //     post() {
  //         return this.$store.getters.posts.filter(post=> post.id === location.pathname)
  //     }
  // }
  created() {
    //   const id = location.pathname;
    // console.dir(this.$route);
  },
};
</script>

<style lang="scss" scoped></style>
