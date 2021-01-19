<template>
  <div>
    <v-timeline-item
      v-bind:color="schedule.options.color"
      v-bind:small="schedule.options.small"
    >
      <v-row>
        <v-col cols="3">
          <strong>{{ schedule.time }}</strong>
        </v-col>
        <v-col>
          <strong>{{ schedule.title }}</strong>
          <div class="caption mb-2">{{ schedule.caption }}</div>
        </v-col>
        <v-col cols="6" v-if="schedule.participants.length"
          ><v-avatar
            v-for="participant in schedule.participants"
            v-bind:key="participant"
          >
            <v-img v-bind:src="profileURL(participant)"></v-img>
          </v-avatar>
        </v-col>
      </v-row>
    </v-timeline-item>
  </div>
</template>

<script>
export default {
  props: ["schedule"],
  methods: {
    profileURL(id) {
      const url = `https://randomuser.me/api/portraits/men/${id}.jpg`;
      console.log(url);
      return url;
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
