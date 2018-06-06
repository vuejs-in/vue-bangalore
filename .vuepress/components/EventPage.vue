<template>
  <div class="event">
    <header>
      <h1 class="title">
        <a :href="'https://meetup.com/vue-bangalore/events/' + $page.frontmatter.meetup" target="_blank">
          <span class="title-hashtag">VueBLR #{{ $page.frontmatter.id }}</span>
        </a>
        <span class="title-text">{{ $page.frontmatter.title }}</span>
      </h1>
    </header>

    <main class="agenda">
      <EventGallery :photos="$page.frontmatter.photos" />

      <h2>Summary</h2>
      <ul>
        <li v-for="(item, index) in $page.frontmatter.agenda" :key="index">
          <component :is="use(item.type)" v-bind="item" />
        </li>        
      </ul>
    </main>

    <footer>
      <h2>Sponsors</h2>
      <EventSponsor v-for="(item, index) in $page.frontmatter.sponsors" :key="index" v-bind="item" />

      <h2>Organizers</h2>
      <EventSpeaker v-for="(item, index) in $page.frontmatter.organizers" :key="index" :speaker="item" />
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    use (type) {
      switch (type) {
        case 'talk': return 'EventTalk';
        case 'show': return 'EventShow';
        case 'tell': return 'EventTell';
        case 'workshop': return 'EventWorkshop';
        case 'Q&A': return 'EventQuestion';
      }
    }
  }
}
</script>

<style scoped>
.title-hashtag {
  opacity: .75;
  display: inline-block;
  margin-right: 1rem;
}
</style>


