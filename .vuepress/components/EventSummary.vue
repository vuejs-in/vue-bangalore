<script>
export default {
  props: ["id", "title", "date", "time", "venue", "ticket", "link"],
  computed: {
    hasDate() {
      return this.date instanceof Date
    },
    isUpcoming() {
      return this.date instanceof Date && this.date.getTime() > Date.now();
    }
  }
};
</script>

<template>
  <section>
    <h3>
      #{{ id }} <a :href="link">{{ title }}</a>
    </h3>

    <div v-if="hasDate">
      <p>
        Venue: {{ venue.name }} <br />
        Time: {{ date.toDateString() }}, {{ time }}
      </p>

      <p v-if="isUpcoming && ticket">
        <a :href="ticket" target="_blank" rel="noopener noreferrer">Buy tickets</a>
      </p>
    </div>
  </section>
</template>
