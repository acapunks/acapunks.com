<template>
  <section id="my-punks" class="grow flex justify-center items-center">
    <div class="w-full">
      <carousel class="mb-8" />
      <div>
        <p class="text-center font-black text-2xl">前端工程師命苦</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
</script>

<style lang="scss">
@import "@/assets/scss/color";

#my-punks {
  background: $aca-gradient-light;
}
</style>
