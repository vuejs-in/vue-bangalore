<template>
  <section class="talk">
    <h3 class="title"><u>Show &amp; Tell</u>: {{ title }}</h3>
    <div class="recording" v-if="recording">
      <iframe :src="recording" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </div>
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
  props: ['title', 'speaker', 'website', 'bio', 'description', 'recording'],
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
