<template>
  <div>
    <h1>Create an Event</h1>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  head() {
    return {
      title: "Create an Event",
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
