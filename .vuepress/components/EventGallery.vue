<template>
  <Carousel class="gallery" :perPage="1" :autoplay="true" :loop="true" :navigationEnabled="true">
    <Slide v-for="photo in photos" :key="photo" class="slide">
      <img class="img" :src="photo" />
    </Slide>
  </Carousel>
</template>

<script>
import { Carousel, Slide } from '../../node_modules/vue-carousel/src/index.js'

export default {
  props: ['photos'],
  components: { Carousel, Slide }
}
</script>

<style scoped>
.slide {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.img {
  object-fit: contain;
}
</style>
