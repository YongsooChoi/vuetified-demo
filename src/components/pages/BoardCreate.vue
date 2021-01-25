<template>
  <div>
    게시물 작성
    <v-text-field
      required
      v-model="title"
      :rules="rules.title"
      counter="25"
      hint="Title is required"
      label="Title"
    ></v-text-field>
    <v-text-field autocomplete="email" label="Email"></v-text-field>
    <v-textarea
      counter
      auto-grow
      clearable
      clear-icon="mdi-close-circle"
      label="Text"
      :rules="rules.contents"
      :value="contents"
      placeholder="200자 이내로 작성"
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
    <div style="float: right">
      <v-btn depressed outlined link style="margin: 10px" to="/board">
        이전으로
      </v-btn>
      <v-btn depressed outlined>
        작성 완료
      </v-btn>
    </div>
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
</template>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      first: "",
      last: "",
      bio: "",
      favoriteAnimal: "",
      age: null,
      terms: false,
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        contents: [(v) => v.length <= 200 || "Max 25 characters"],
        title: [(v) => v.length <= 25 || "Max 25 characters"],
      },
      title: "",
      contents: "",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.",
      conditions: false,
      terms: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
