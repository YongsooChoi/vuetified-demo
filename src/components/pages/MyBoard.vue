<template>
  <div>
    <h1>My Board</h1>

    <br />
    <v-divider />
    <br />

    <div>
      <v-btn depressed outlined>
        게시글 작성
      </v-btn>
    </div>
    <br />

    <v-simple-table
      fixed-header
      v-bind:headers="headers"
      v-bind:search="search"
    >
      <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
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
              작성자
            </th>
            <th class="text-left">
              작성일
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
            <td>{{ post.createdDate ? createdDate : "" }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <br />
    <pagination
      v-bind:page="page"
      v-bind:pageTotal="pageTotal"
      v-on:changePage="changePage"
    />
  </div>
</template>

<script>
import pagination from "@/components/molecules/Pagination";

export default {
  components: { pagination },
  data() {
    return {
      search: "",
      id: "",
      page: 1,
      postPerPage: 10,
    };
  },
  props: [],
  methods: {
    moveToDetail(id) {
      this.$router.push({ name: "boardDetail", params: { id } });
    },
    changePage(value) {
      this.page = value;
    },
  },
  computed: {
    headers() {
      return [
        {
          text: "ID",
          align: "start",
          sortable: false,
          value: "id",
          filter: (value) => {
            if (!this.id) return true;
            return value < parseInt(this.id);
          },
        },
        {
          text: "제목",
          value: "title",
        },
        {
          text: "작성자 번호",
        },
        {
          text: "작성일",
        },
      ];
    },
    posts() {
      return this.$store.getters.posts.slice(
        this.postPerPage * (this.page - 1),
        this.postPerPage * this.page
      );
    },
    pageTotal() {
      return this.$store.getters.posts.length / this.postPerPage === 0
        ? 1
        : Math.ceil(this.$store.getters.posts.length / this.postPerPage);
    },
  },
  created() {},
};
</script>

<style lang="scss" scoped></style>
