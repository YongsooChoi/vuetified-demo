<template>
  <div>
    <h2>{{ detail && detail.title }}</h2>
    <span>ID {{ id }}</span
    ><br />
    <br />
    <v-divider /><br />
    <v-simple-table>
      <v-row>
        <v-col>내용</v-col>
        <v-col>
          {{ detail && detail.body }}
        </v-col>
        <v-col> </v-col>
      </v-row>
    </v-simple-table>
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
    posts() {
      return this.$store.getters.posts;
    },
    detail() {
      return this.posts.filter((post) => post.id === this.id)[0];
      // return this.$store.getters.posts;
    },
  },
};
</script>

<style lang="scss" scoped></style>
