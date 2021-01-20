<template>
  <div>
    <h1>Components Demonstration</h1>
    <div>
      <h2>timeline</h2>

      <v-timeline align-top dense>
        <!-- <v-timeline-item color="pink" small>
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
        </v-timeline-item> -->

        <TimelineItem
          v-for="schedule in schedules"
          v-bind:schedule="schedule"
          v-bind:key="schedule.id"
        ></TimelineItem>
      </v-timeline>
      <br />

      <v-divider />

      <h2>일정 추가 color-picker, time-picker, v-text-field</h2>
      <v-form>
        <div>
          <label for="color-picker">색상을 선택해주세요</label>
          <v-color-picker
            hide-canvas
            hide-inputs
            id="color-picker"
            v-model="schedulesToAdd.color"
          />
        </div>
        <br />
        <div>
          <label for="time-picker">시작 시간을 선택해주세요</label>
          <v-row id="time-picker" justify="space-around" align="center">
            <v-col style="width: 350px; flex: 0 1 auto;">
              <h3>시작:</h3>
              <v-time-picker
                landscape
                scrollable
                ampm-in-title
                v-model="schedulesToAdd.timeStart"
                v-bind:max="schedulesToAdd.timeEnd"
              ></v-time-picker>
            </v-col>
            <v-col style="width: 350px; flex: 0 1 auto;">
              <h3>종료:</h3>
              <v-time-picker
                landscape
                scrollable
                ampm-in-title
                v-model="schedulesToAdd.timeEnd"
                v-bind:min="schedulesToAdd.timeStart"
              ></v-time-picker>
            </v-col>
          </v-row>
        </div>

        <br />
        <div>
          <v-text-field
            type="text"
            placeholder="어떤 일정인가요?"
            v-model="schedulesToAdd.title"
          >
            <v-icon @click="addSchedules" slot="append" color="red">
              mdi-plus
            </v-icon></v-text-field
          >
        </div>
      </v-form>
      <!-- <div v-if="showSchedulesToAdd">
        {{ schedulesToAdd }}
      </div> -->
    </div>

    <!-- <v-divider />
    <v-row>
      <v-col cols="11" sm="5">
        <v-menu
          ref="menu"
          v-model="menu2"
          :close-on-content-click="false"
          :nudge-right="40"
          :return-value.sync="time"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="time"
              label="Picker in menu"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker
            v-if="menu2"
            v-model="time"
            full-width
            @click:minute="$refs.menu.save(time)"
          ></v-time-picker>
        </v-menu>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="11" sm="5">
        <v-dialog
          ref="dialog"
          v-model="modal2"
          :return-value.sync="time"
          persistent
          width="290px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="time"
              label="Picker in dialog"
              prepend-icon="mdi-clock-time-four-outline"
              readonly
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-time-picker v-if="modal2" v-model="time" full-width>
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal2 = false">
              Cancel
            </v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(time)">
              OK
            </v-btn>
          </v-time-picker>
        </v-dialog>
      </v-col>
    </v-row> -->

    <br />
    <v-divider />
    <expansion-panel />
  </div>
</template>

<script>
import TimelineItem from "@/components/molecules/TimelineItem";
import ExpansionPanel from "@/components/organisms/ExpansionPanel";

export default {
  components: { TimelineItem, ExpansionPanel },

  data: () => ({
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
    schedulesToAdd: {
      color: "",
      timeStart: "",
      timeEnd: "",
      title: "",
    },
    // showSchedulesToAdd: false,
  }),

  methods: {
    addSchedules() {
      const item = {
        id: Date.now(),
        time: `${this.schedulesToAdd.timeStart} - ${this.schedulesToAdd.timeEnd}`,
        title: this.schedulesToAdd.title,
        caption: "",
        participants: [],
        options: {
          color: this.schedulesToAdd.color,
          small: true,
        },
      };
      this.schedules = [...this.schedules, item];
      // this.showSchedulesToAdd = true;
    },
  },
};
</script>

<style lang="scss" scoped></style>
