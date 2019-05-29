<script>
import events from '@dynamic/events'
import EventSummary from './EventSummary.vue'

export default {
  props: {
    limit: Number
  },
  computed: {
    events() {
      const now = Date.now()

      const past = events.filter(
        event => !event.date || new Date(event.date).getTime() < now
      )

      if (typeof this.limit === 'number') {
        return past.slice(0, this.limit)
      }

      return past
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
