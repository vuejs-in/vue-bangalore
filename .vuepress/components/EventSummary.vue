<script>
export default {
  props: ["id", "title", "date", "time", "venue", "ticket", "link"],
  computed: {
    eventDate() {
      return this.date ? new Date(this.date) : null
    },
    isUpcoming() {
      return this.eventDate && this.eventDate.getTime() > Date.now()
    }
  }
};
</script>

<template>
  <section>
    <h3>
      #{{ id }} <a :href="link">{{ title }}</a>
    </h3>

    <div v-if="eventDate">
      <p>
        <strong>Venue:</strong> {{ venue.name }} (<a :href="venue.map" target="_blank" rel="noopener noreferrer">see on map</a>) <br />
        <strong>Time:</strong> {{ eventDate.toDateString() }}, {{ time }}
      </p>

      <p v-if="isUpcoming && ticket">
        <a :href="ticket" target="_blank" rel="noopener noreferrer">Buy tickets</a>
      </p>
    </div>
  </section>
</template>
