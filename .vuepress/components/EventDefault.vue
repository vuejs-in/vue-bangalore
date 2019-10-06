<template>
  <section>
    <h3 v-if="title" class="title">{{ title }}</h3>
    <div v-if="recording" class="recording">
      <iframe :src="recording" width="100%" height="100%" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
    </div>
    <div v-if="description" v-html="description"></div>
    <EventSpeaker v-if="speaker" :speaker="speaker" :bio="bio" />
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
  props: ['title', 'description', 'speaker', 'bio', 'deck', 'issue', 'recording'],
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
