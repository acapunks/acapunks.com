<template>
  <div class="carousel" ref="carousel">
    <a v-for="(slide, i) in slides" class="carousel-item">
      <img :src="slide.source" :alt="slide.alt" />
    </a>
  </div>
</template>

<script lang="ts">
import { onMounted, ref, defineProps, defineComponent, PropType } from 'vue'
import M from 'materialize-css'

interface Slide {
  source: string,
  alt?: string
}

export default defineComponent({
  props: {
    slides: {
      type: Array as PropType<Array<Slide>>,
      required: true
    }
  },
  setup() {
    const carousel = ref(null as null | HTMLDivElement)

    onMounted(() => {
      // init materialize css
      M.Carousel.init(carousel.value!)
    })

    return {
      carousel
    }
  }
})

</script>

<style lang="scss" scoped>
@import "materialize-css/dist/css/materialize.min.css";
</style>

<style lang="scss">
.carousel {
  .carousel-item {
    @apply min-w-[70vw] min-h-[70vw] sm:min-w-[360px] sm:min-h-[360px] shadow-md;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }
  }
}
</style>


