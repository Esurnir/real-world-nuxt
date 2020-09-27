<template>
  <div>
    <h1>Events</h1>

    <EventCard
      v-for="event in events"
      :key="event.id"
      :event="event"
      :data-index="event.id"
    />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Event } from "~/types/event";
import EventCard from "~/components/EventCard.vue";

export default Vue.extend({
  components: {
    EventCard
  },
  async asyncData({ $axios, error }) {
    try {
      const { data } = await $axios.get<Event[]>(
        "http://localhost:3000/events"
      );
      return {
        events: data
      };
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch events at this time. Please try again."
      });
    }
  },
  data() {
    return {
      events: [] as Event[]
    };
  },
  head() {
    return {
      title: "Event Listing"
    };
  }
});
</script>
