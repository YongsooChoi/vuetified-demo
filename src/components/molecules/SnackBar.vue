<template>
  <v-snackbar
    v-model="snackbarAttr.visible"
    v-bind:timeout="snackbarAttr.timeout"
  >
    {{ snackbarAttr.text }}
    <!-- <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbarAttr.visible = false"
        >
          Close
        </v-btn>
      </template> -->
  </v-snackbar>
</template>

<script>
export default {
  props: ["snackbarAttr"],
  methods: {
    onClose: () => {
      this.$emit(close);
    },
  },
};
</script>

<style lang="scss" scoped></style>
