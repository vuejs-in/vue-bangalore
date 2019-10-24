<template>
  <ItemRow>
    <img v-if="twitter" slot="icon" :src="'//avatars.io/twitter/' + twitter" class="avatar">
    <a :href="'https://twitter.com/' + twitter" target="_blank">
      {{ name }}
    </a>
    {{ bio }}
  </ItemRow>
</template>

<script>
export default {
  props: ['speaker', 'bio'],
  computed: {
    name () {
      return this.speaker.replace(/<[^>]+>/, '')
    },
    twitter () {
      const matches = /<@([^>]+)>/.exec(this.speaker)

      if (matches) return matches[1]
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: -webkit-box !important;
  align-items: center;
}
.avatar {
  height: 5rem !important;
  width: 5rem !important;
}
</style>
