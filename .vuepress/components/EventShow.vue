<template>
  <section class="talk">
    <h3 class="title"><u>Show &amp; Tell</u>: {{ title }}</h3>
    <div class="recording" v-if="recording">
      <iframe :src="recording" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </div>
    <div v-if="description" v-html="description" class="description"></div>
    <EventSpeaker :speaker="speaker" :bio="bio" />
    <ItemRow v-if="deck">
      <Icon name="deck" slot="icon" />
      <a :href="deck" target="_blank">Speaker Deck</a>
    </ItemRow>
    <ItemRow v-if="website">
      <Icon name="website" slot="icon" />
      <a :href="website" target="_blank">{{ website }}</a>
    </ItemRow>
  </section>
</template>

<script>
export default {
  props: ['title', 'speaker', 'website', 'bio', 'description', 'recording', 'deck'],
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

.recording {
  width: 100%;
  padding-top: 56.29%;
  position: relative;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
