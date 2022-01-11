<template>
  <div class="carousel" ref="carousel">
    <a class="carousel-item" href="#one!">
      <img src="https://images.chinatimes.com/newsphoto/2020-10-02/656/20201002001208.jpg" />
    </a>
    <a class="carousel-item" href="#two!">
      <img src="https://images.chinatimes.com/newsphoto/2020-10-02/656/20201002001208.jpg" />
    </a>
    <a class="carousel-item" href="#three!">
      <img src="https://images.chinatimes.com/newsphoto/2020-10-02/656/20201002001208.jpg" />
    </a>
    <a class="carousel-item" href="#four!">
      <img src="https://images.chinatimes.com/newsphoto/2020-10-02/656/20201002001208.jpg" />
    </a>
    <a class="carousel-item" href="#five!">
      <img src="https://images.chinatimes.com/newsphoto/2020-10-02/656/20201002001208.jpg" />
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
