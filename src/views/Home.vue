<template>
  <div class="home">
    <mint />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Mint from '@/components/Mint.vue'

export default defineComponent({
  name: 'Home',
  components: {
    mint: Mint
  }
})
</script>
