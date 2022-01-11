<template>
  <section id="my-punks" class="grow flex justify-center items-center">
    <div class="p-5 w-full sm:w-[32rem]">
      <carousel />
      <div>
        <p class="text-center">You have 5 Punks!</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Carousel from '@/components/Carousel.vue'
</script>
