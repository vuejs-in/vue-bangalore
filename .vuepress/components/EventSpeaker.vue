<template>
  <ItemRow>
    <img slot="icon" :src="'http://avatars.io/twitter/' + twitter" class="avatar">
    <a :href="'https://twitter.com/' + twitter" target="_blank">
      {{ name }}
    </a>
  </ItemRow>
</template>

<script>
export default {
  props: ['speaker'],
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
