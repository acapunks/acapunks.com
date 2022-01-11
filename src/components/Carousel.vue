<template>
  <div class="carousel" ref="carousel">
    <a class="carousel-item" href="#one!">
      <img src="http://images.plurk.com/2cdafbaf94b8f0db2c6e945ef2879a0e.jpg" />
    </a>
    <a class="carousel-item" href="#two!">
      <img src="https://dvblobcdnjp.azureedge.net//Content/Upload/Popular/Images/2021-06/fee1c72f-142f-460e-b4b4-47ca6fded80f_m.jpg" />
    </a>
    <a class="carousel-item" href="#three!">
      <img src="https://s.yimg.com/ny/api/res/1.2/hpqCz_2f2YNqGe5R.NDdmA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQ0OQ--/https://s.yimg.com/uu/api/res/1.2/8I6LJRipR0y9LP4Qgn5mpA--~B/aD04MDA7dz0xMTQwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/dailyview.tw/b252d230669de26f00672f54f1485169" />
    </a>
    <a class="carousel-item" href="#four!">
      <img src="https://attach.setn.com/newsimages/2014/03/27/59872-PH.jpg" />
    </a>
    <a class="carousel-item" href="#five!">
      <img src="https://i.imgur.com/xkNwvME.jpg" />
    </a>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import M from 'materialize-css'

const carousel = ref(null as null | HTMLDivElement)
onMounted(() => {
  // init materialize css
  M.Carousel.init(carousel.value!)
})
</script>

<style lang="scss" scoped>
@import "materialize-css/dist/css/materialize.min.css";
</style>

<style lang="scss">
.carousel {
  .carousel-item {
    @apply min-w-[70vw] min-h-[70vw] sm:min-w-[360px] sm:min-h-[360px];
    background: lightcoral;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: hidden;
    }
  }
}
</style>


