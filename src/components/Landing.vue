<template>
  <section scroll="no" id="landing" class="flex flex-col items-stretch lg:flex-row lg:items-center py-10">
    <div class="lg:container lg:mx-auto grow flex flex-col lg:flex-row justify-center lg:items-center px-4">
      <div class="lg:w-1/3 lg:mb-0 lg:mr-24">
        <h1 class="text-transparent text-4xl lg:text-7xl font-black mb-3">AcaPunks</h1>
        <h2 class="text-gray-50 md:text-xl lg:text-2xl">
          10,000 uniquely generated punks living on the Acala Network
          <br />Join the club and explore the Acala universe together
        </h2>
      </div>
      <div class="lg:grow flex justify-center items-center">
        <carousel :slides="demoSlides" class="-mt-12 -mb-12 md:my-0 md:mt-12 lg:mt-0" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
const demoSlides = Array.from({ length: 5 }, (_, i) => i + 1).map(i => ({ source: '/demo/' + i + '.svg', alt: "slide " + i }))
</script>

<style lang="scss">
@import "@/assets/scss/color";

#landing {
  background: $aca-gradient-light;

  h1 {
    background: $aca-gradient-reverse;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.3));
  }

  h2 {
    filter: drop-shadow(2px 2px rgba(0, 0, 0, 0.3));
  }
}
</style>
