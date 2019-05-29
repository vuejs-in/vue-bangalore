<script>
import events from '@dynamic/events'
import EventSummary from './EventSummary.vue'

export default {
  computed: {
    events() {
      const now = Date.now()

      return events.filter(
        event => event.date && new Date(event.date).getTime() >= now
      )
    }
  },
  components: { EventSummary }
}
</script>

<template>
  <div class="events">
    <EventSummary class="event" v-for="event in events" :key="event.id" v-bind="event" />
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
