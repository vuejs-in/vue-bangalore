<template>
  <ItemRow>
    <img slot="icon" :src="'//avatars.io/twitter/' + twitter" class="avatar">
    <a :href="'https://twitter.com/' + twitter" target="_blank">
      {{ name }}
    </a>
    <span>&nbsp;- {{ type | toName }}</span>
  </ItemRow>
</template>

<script>
export default {
  props: ['sponsor', 'type'],
  computed: {
    name () {
      return this.sponsor.replace(/<[^>]+>/, '')
    },
    twitter () {
      const matches = /<@([^>]+)>/.exec(this.sponsor)

      if (matches) return matches[1]
    }
  },
  filters: {
    toName(value) {
      return value[0].toUpperCase() + value.substr(1) + ' Partner'
    }
  }
}
</script>
