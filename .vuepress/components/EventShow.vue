<template>
  <section class="talk">
    <h3 class="title"><u>Show &amp; Tell</u>: {{ title }}</h3>
    <div v-if="description" v-html="description" class="description"></div>
    <EventSpeaker :speaker="speaker" :bio="bio" />
    <ItemRow v-if="website">
      <Icon name="website" slot="icon" />
      <a :href="website" target="_blank">{{ website }}</a>
    </ItemRow>
  </section>
</template>

<script>
export default {
  props: ['title', 'speaker', 'website', 'bio', 'description'],
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

.description {
  margin-bottom: 1rem;
}
</style>
