<template>
  <div>
    <h1>My Board</h1>
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Id
            </th>
            <th class="text-left">
              Title
            </th>
            <th class="text-left">
              User
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="post in posts"
            v-bind:key="post.id"
            v-on:click="moveToDetail(post.id)"
          >
            <td>{{ post.id }}</td>
            <td>{{ post.title }}</td>
            <td>{{ post.userId }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <br />
    <pagination v-bind:page="page" v-bind:totalPage="pageTotal" />
  </div>
</template>

<script>
import pagination from "@/components/molecules/Pagination";

export default {
  components: { pagination },
  data() {
    return {
      page: 1,
      postPerPage: 10,
    };
  },
  props: [],
  methods: {
    moveToDetail(id) {
      this.$router.push({ name: "boardDetail", params: { id } });
    },
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
    pageTotal() {
      return this.posts.length / this.postPerPage === 0
        ? 1
        : this.posts.length / this.postPerPage + 1;
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
