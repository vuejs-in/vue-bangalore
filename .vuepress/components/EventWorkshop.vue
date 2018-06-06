<template>
  <section class="talk">
    <h3 class="title">{{ title }}</h3>
    <EventSpeaker :speaker="speaker" />
    <ItemRow v-if="deck">
      <IconDeck slot="icon" />
      <a :href="deck" target="_blank">Speaker Deck</a>
    </ItemRow>
    <ItemRow v-if="source">
      <IconGithub slot="icon" />
      <a :href="source" target="_blank">{{ source.replace(/https?:\/\/github.com\//, '') }}</a>
    </ItemRow>
    <ItemRow v-if="issue">
      <IconRequest slot="icon" />
      <a :href="issue" target="_blank">{{ issue | title }} </a>
    </ItemRow>
  </section>
</template>

<script>
export default {
  props: ['title', 'speaker', 'deck', 'issue', 'source'],
  filters: {
    filename (value) {
      return value.split('/').pop()
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
  font-size: .5rem;
  position: absolute;
  top: -.6em;
  opacity: .75;
}
</style>

