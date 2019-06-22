<script>
export default {
  props: ["id", "title", "date", "time", "venue", "townscript", "link"],
  computed: {
    eventDate() {
      return this.date ? new Date(this.date) : null
    },
    isUpcoming() {
      return this.eventDate && this.eventDate.getTime() > Date.now()
    }
  },
  methods: {
    showTicketsPopup: function() {
      popup(this.townscript);
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

      <p v-if="isUpcoming && townscript">
        <button v-on:click="showTicketsPopup" class="tsbutton">Count me in!</button>
        <noscript id="tsNoJsMsg">Javascript on your browser is not enabled.</noscript>
        <script src="https://www.townscript.com/popup-widget/townscript-widget.nocache.js" type="text/javascript"></script>
      </p>
    </div>
  </section>
</template>
