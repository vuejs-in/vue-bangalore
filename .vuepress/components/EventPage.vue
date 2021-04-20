<template>
  <div class="event">
    <header>
      <h1 class="title">
        <a
          class="meetup-link"
          :href="
            'https://meetup.com/vue-bangalore/events/' +
            $page.frontmatter.meetup
          "
          target="_blank"
        >
          <img
            height="40"
            width="40"
            src="/meetup_logo.png"
            alt="RSVP on Meetup (not mandatory)"
            title="RSVP on Meetup (not mandatory)"
          />
        </a>
        <span class="title-text">{{ $page.frontmatter.title }}</span>
      </h1>
    </header>

    <main class="agenda">
      <EventGallery :photos="$page.frontmatter.photos" />
      <div
        v-if="$page.frontmatter.event_description"
        v-html="$page.frontmatter.event_description"
      ></div>
      <h2>Agenda</h2>
      <template
        v-if="$page.frontmatter.agenda && $page.frontmatter.agenda.length"
      >
        <ul>
          <li v-for="(item, index) in $page.frontmatter.agenda" :key="index">
            <component :is="use(item.type)" v-bind="item" />
          </li>
        </ul>
      </template>
      <p v-else>TBA</p>
    </main>

    <footer>
      <section v-if="date">
        <h2>Details</h2>

        <p><strong>Date:</strong> {{ date.toDateString() }}</p>
        <p><strong>Time:</strong> {{ $page.frontmatter.time }}</p>
        <p>
          <strong>Venue:</strong> {{ $page.frontmatter.venue.name }}
          <template v-if="!!$page.frontmatter.venue.map"
            >(<a
              :href="$page.frontmatter.venue.map"
              target="_blank"
              rel="noopener noreferrer"
              >see on map</a
            >)</template
          >
        </p>
      </section>

      <section v-if="widget">
        <h2>Register</h2>
        <iframe
          :src="widget"
          frameborder="10"
          height="600"
          width="100%"
        ></iframe>
      </section>

      <section
        v-if="$page.frontmatter.sponsors && $page.frontmatter.sponsors.length"
      >
        <h2>Sponsors</h2>
        <EventSponsor
          v-for="(item, index) in $page.frontmatter.sponsors"
          :key="item.sponsor"
          v-bind="item"
        />
      </section>

      <h2>Organizers</h2>
      <EventSpeaker
        v-for="(item, index) in $page.frontmatter.organizers"
        :key="item"
        :speaker="item"
      />
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    use(type) {
      switch (type) {
        case "talk":
          return "EventTalk";
        case "show":
          return "EventShow";
        case "tell":
          return "EventTell";
        case "workshop":
          return "EventWorkshop";
        case "Q&A":
          return "EventQuestion";
        default:
          return "EventDefault";
      }
    },
  },
  computed: {
    date() {
      return this.$page.frontmatter.date
        ? new Date(this.$page.frontmatter.date)
        : null;
    },
    widget() {
      return this.$page.frontmatter.townscript
        ? "https://www.townscript.com/widget/" +
            this.$page.frontmatter.townscript
        : null;
    },
  },
};
</script>

<style scoped>
.title-hashtag {
  opacity: 0.75;
  display: inline-block;
  margin-right: 1rem;
}

.meetup-link {
  vertical-align: middle;
}
</style>


