<template>
  <section class="talk">
    <h3 class="title"><u>Talk</u>: {{ title }}</h3>
    <div v-if="description" v-html="description"></div>
    <EventSpeaker :speaker="speaker" :bio="bio" />
    <ItemRow v-if="deck">
      <Icon name="deck" slot="icon" />
      <a :href="deck" target="_blank">Speaker Deck</a>
    </ItemRow>
    <ItemRow v-if="issue">
      <Icon name="github" slot="icon" />
      <a :href="issue" target="_blank">{{ issue | filename }} </a>
    </ItemRow>
  </section>
</template>

<script>
export default {
  props: ['title', 'description', 'speaker', 'bio', 'deck', 'issue'],
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
</style>

