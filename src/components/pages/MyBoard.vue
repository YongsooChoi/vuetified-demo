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
    <pagination />
  </div>
</template>

<script>
import pagination from "@/components/molecules/Pagination";

export default {
  components: { pagination },
  props: [],
  methods: {
    moveToDetail(id) {
      console.log(id);
      this.$router.push({ name: "boardDetail", params: { id } });
    },
  },
  computed: {
    posts() {
      return this.$store.getters.posts;
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
