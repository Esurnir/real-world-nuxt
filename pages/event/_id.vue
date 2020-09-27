<template>
  <div>
    <h1>Event {{ event.title }}</h1>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import MetaInfo from "vue-meta";
import { Event } from "~/types/event";

interface Data {
  event?: Event;
}

export default Vue.extend({
  async asyncData({ $axios, error, params }): Promise<Data | void> {
    try {
      const { data } = await $axios.get<Event>(
        "http://localhost:3000/events/" + params.id
      );
      return {
        event: data
      };
    } catch (e) {
      error({
        statusCode: 503,
        message:
          "Unable to fetch event#" +
          params.id +
          " at this time. Please try again."
      });
    }
  },
  data() {
    return {
      event: undefined
    } as Data;
  },
  head(): MetaInfo {
    return {
      title: "Event #" + this.event!.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "What you need to know about event " + this.event!.title
        }
      ]
    };
  }
});
</script>
