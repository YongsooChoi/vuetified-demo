<template>
  <div>
    게시물 수정
    <v-text-field
      required
      v-model="form.title"
      v-bind:rules="rules.title"
      counter="100"
      hint="Title is required"
      label="Title"
    ></v-text-field>
    <v-text-field
      v-model="form.email"
      autocomplete="email"
      label="Email"
    ></v-text-field>
    <v-textarea
      required
      v-model="form.body"
      v-bind:rules="rules.body"
      counter
      auto-grow
      clearable
      clear-icon="mdi-close-circle"
      label="Body"
      placeholder="300자 이내로 작성"
    ></v-textarea>
    <v-checkbox v-model="form.terms" color="green">
      <template v-slot:label>
        <div @click.stop="">
          Do you accept the
          <a href="#" @click.prevent="terms = true">terms</a>
          and
          <a href="#" @click.prevent="conditions = true">conditions?</a>
        </div>
      </template>
    </v-checkbox>
    <div style="float: right">
      <!-- <v-btn depressed outlined link style="margin: 10px" to="/board">
        이전으로
      </v-btn> -->
      <v-btn depressed outlined v-on:click="edit">
        작성 완료
      </v-btn>
    </div>
    <div>
      <v-dialog v-model="terms" width="70%">
        <v-card>
          <v-card-title class="title">
            Terms
          </v-card-title>
          <v-card-text v-for="n in 5" :key="n">
            {{ content }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="purple" @click="terms = false">
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="conditions" width="70%">
        <v-card>
          <v-card-title class="title">
            Conditions
          </v-card-title>
          <v-card-text v-for="n in 5" :key="n">
            {{ content }}
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn text color="purple" @click="conditions = false">
              Ok
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </div>
</template>

<script>
import { UPDATE_POST } from "@/store/mutation-types";

export default {
  data() {
    return {
      form: {
        title: "",
        body: "",
        email: "",
        terms: false,
      },
      rules: {
        title: [(v) => v.length <= 100 || "Max 100 characters"],
        body: [(v) => v.length <= 300 || "Max 300 characters"],
      },
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      conditions: false,
      terms: false,
    };
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
  },

  methods: {
    edit() {
      this.$store.commit(UPDATE_POST, {
        id: parseInt(this.id),
        post: this.form,
      });
      //   setTimeout(() => {
      this.$router.push(`/board`);
      //   }, 1000); // 서버 응답 데이터의 id 이용하도록 수정 필요
    },
  },
  created() {
    this.form = {
      ...this.form,
      title: this.detail.title,
      body: this.detail.body,
      email: this.detail.email,
      terms: this.detail.terms,
    };
  },
};
</script>

<style lang="scss" scoped></style>
