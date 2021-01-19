<template>
  <div>
    <h1>Components Demonstration</h1>
    <div>
      <h3>timeline</h3>

      <v-timeline align-top dense>
        <v-timeline-item color="pink" small>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>5pm</strong>
            </v-col>
            <v-col>
              <strong>New Icon</strong>
              <div class="caption">Mobile App</div>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="teal lighten-3" small>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>3-4pm</strong>
            </v-col>
            <v-col>
              <strong>Design Stand Up</strong>
              <div class="caption mb-2">Hangouts</div>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairFrida&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Skull&eyeType=Wink&eyebrowType=RaisedExcitedNatural&mouthType=Disbelief&skinColor=Brown"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairFrizzle&accessoriesType=Prescription02&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=BrownDark&clotheType=BlazerSweater&clotheColor=Black&eyeType=Default&eyebrowType=FlatNatural&mouthType=Default&skinColor=Tanned"
                ></v-img>
              </v-avatar>
              <v-avatar>
                <v-img
                  src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairMiaWallace&accessoriesType=Sunglasses&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Smile&skinColor=Pale"
                ></v-img>
              </v-avatar>
            </v-col>
          </v-row>
        </v-timeline-item>

        <v-timeline-item color="pink" small>
          <v-row class="pt-1">
            <v-col cols="3">
              <strong>12pm</strong>
            </v-col>
            <v-col>
              <strong>Lunch break</strong>
            </v-col>
          </v-row>
        </v-timeline-item>

        <TimelineItem
          v-for="schedule in schedules"
          v-bind:schedule="schedule"
          v-bind:key="schedule.id"
        ></TimelineItem>
      </v-timeline>
      <br />

      <v-divider />

      <v-form>
        <div>
          <label for="color-picker">색상을 선택해주세요</label>
          <v-color-picker
            id="color-picker"
            hide-canvas
            hide-inputs
            width="300px"
          />
        </div>
        <br />
        <div>
          <label for="time-picker">시간을 선택해주세요</label>
          <v-time-picker id="time-picker" width="300px"></v-time-picker>
        </div>
        <br />
        <div>
          <v-text-field placeholder="어떤 일정인가요?">
            <v-icon slot="append" color="red">
              mdi-plus
            </v-icon></v-text-field
          >
        </div>
      </v-form>
    </div>
  </div>
</template>

<script>
import TimelineItem from "@/components/molecules/TimelineItem";

export default {
  components: { TimelineItem },

  data() {
    return {
      schedules: [
        {
          id: 0,
          time: "12:30pm - 1:30pm",
          title: "점심 시간",
          caption: "",
          participants: [],
          options: {
            color: "teal lighten-3",
            small: true,
          },
        },
        {
          id: 1,
          time: "4pm - 4:30pm",
          title: "데일리미팅",
          caption: "Online Meeting",
          participants: [1, 2, 9, 4],
          options: {
            color: "pink",
            small: false,
          },
        },
      ],
    };
  },

  method: {
    addSchedules(color, time, title) {
      const item = {
        id: 0,
        time,
        title,
        caption: "",
        participants: [],
        options: {
          color,
          small: true,
        },
      };
      return item;
    },
  },
};
</script>

<style lang="scss" scoped></style>
