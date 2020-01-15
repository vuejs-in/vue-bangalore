<template>
  <section class="talk">
    <h3 class="title">{{ title }}</h3>
    <div v-if="description" v-html="description"></div>
    <EventSpeaker v-for="speaker in allSpeakers" :speaker="speaker" />
    <ItemRow v-if="deck">
      <Icon name="deck" slot="icon" />
      <a :href="deck" target="_blank">Speaker Deck</a>
    </ItemRow>
    <ItemRow v-if="source">
      <Icon name="github" slot="icon" />
      <a :href="source" target="_blank">{{ source.replace(/https?:\/\/github.com\//, '') }}</a>
    </ItemRow>
    <ItemRow v-if="issue">
      <Icon name="request" slot="icon" />
      <a :href="issue" target="_blank">{{ issue | title }} </a>
    </ItemRow>
  </section>
</template>

<script>
export default {
  props: ['title', 'speaker', 'speakers', 'description', 'deck', 'issue', 'source'],
  filters: {
    filename (value) {
      return value.split('/').pop()
    }
  },
  computed: {
    allSpeakers() {
      return this.speakers ? this.speakers : [this.speaker];
    }
  }
}
</script>

<style scoped>
.talk {
  position: relative;
}
.title::before {
  content: "Workshop:";
  padding-right: 10px;
  display: inline-block;
  text-decoration: underline;
}
</style>

