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
import EventCard from "~/components/EventCard.vue";

export default Vue.extend({
  components: {
    EventCard
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch("events/fetchEvents");
    } catch (e) {
      error({
        statusCode: 503,
        message: "Unable to fetch events at this time. Please try again."
      });
    }
  },
  computed: {
    events() {
      return this.$accessor.events.events;
    }
  },
  head() {
    return {
      title: "Event Listing"
    };
  }
});
</script>
