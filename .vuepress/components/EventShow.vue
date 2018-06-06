<template>
  <section class="talk">
    <h3 class="title">{{ title }}</h3>
    <EventSpeaker :speaker="speaker" />
    <ItemRow v-if="website">
      <Icon name="website" slot="icon" />
      <a :href="website" target="_blank">{{ website }}</a>
    </ItemRow>
  </section>
</template>

<script>
export default {
  props: ['title', 'speaker', 'website'],
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
  content: "Show & Tell:";
  font-size: .5rem;
  position: absolute;
  top: -.6em;
  opacity: .75;
}
</style>
