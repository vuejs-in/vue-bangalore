<script>
import events from "@dynamic/events";
import EventSummary from "./EventSummary.vue";

export default {
  computed: {
    events() {
      const now = Date.now();

      return events.filter(
        (event) => event.date && new Date(event.date).getTime() >= now
      );
    },
  },
  components: { EventSummary },
};
</script>

<template>
  <div class="events">
    <template v-if="events.length">
      <EventSummary
        class="event"
        v-for="event in events"
        :key="event.id"
        v-bind="event"
      />
    </template>
    <div v-else>
      We're still cooking up stuff for the next one.
      <a href="https://bit.ly/vueblrcfp">Interested to talk?</a>
    </div>
  </div>
</template>

<style scoped>
.events {
  margin: 1rem 0;
}

.event {
  margin-bottom: 1rem;
}
</style>
