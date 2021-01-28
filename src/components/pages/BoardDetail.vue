<template>
  <div>
    <h1>{{ detail && detail.title }}</h1>
    <span>ID {{ id && id }}</span
    ><br />
    <span>E-mail {{ detail.email }}</span>
    <br />
    <div class="btn-bar">
      <v-btn
        depressed
        outlined
        v-on:click="moveToEditPage"
        style="margin: 10px"
      >
        수정
      </v-btn>
      <v-btn depressed outlined v-on:click="deletePost">
        삭제
      </v-btn>
    </div>
    <br />
    <v-divider /><br />
    <!-- <v-simple-table>
      <v-row>
        <v-col>내용</v-col>
        <v-col>
          {{ detail && detail.body }}
        </v-col>
        <v-col> </v-col>
      </v-row>
    </v-simple-table> -->
    <div>
      <h2>내용</h2>
      <br />
      {{ detail && detail.body }}
    </div>
  </div>
</template>

<script>
import { DELETE_POST } from "@/store/mutation-types";

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
      return this.posts.filter((post) => {
        return post.id == parseInt(this.id);
      })[0];
    },
    deleted() {
      return this.detail.deleted;
    },
  },

  methods: {
    deletePost() {
      this.$store.commit(DELETE_POST, { id: parseInt(this.id) });
      this.$router.push("/board");
    },
    moveToEditPage() {
      this.$router.push(`/board/${this.id}/edit`);
    },
  },

  created() {
    if (this.detail && this.deleted) {
      this.$router.push("/board");
    }
  },
};
</script>

<style lang="scss" scoped>
.btn-bar {
  text-align: end;
}
</style>
