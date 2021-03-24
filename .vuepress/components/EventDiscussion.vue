<template>
  <section class="discussion">
    <h3 class="title">{{ title }}</h3>
    <div v-if="description" v-html="description"></div>
  </section>
</template>

<script>
export default {
  props: [
    "title",
    "speaker",
    "speakers",
    "description",
    "deck",
    "issue",
    "source",
  ],
  filters: {
    filename(value) {
      return value.split("/").pop();
    },
  },
  computed: {
    allSpeakers() {
      return this.speakers ? this.speakers : [this.speaker];
    },
  },
};
</script>

<style scoped>
.discussion {
  position: relative;
}
</style>

