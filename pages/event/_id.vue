<template>
  <div>
    <h1>Event #{{ id }}</h1>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import MetaInfo from "vue-meta";

export default Vue.extend({
  computed: {
    id(): string {
      return this.$route.params.id;
    },
  },
  head(): MetaInfo {
    return {
      title: "Event #" + this.id,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "You can create a new event in your neighbourhood",
        },
      ],
    };
  },
});
</script>
