<template>
  <mint id="mint" />
  <faq id="faq" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Mint from '@/components/Mint.vue'
import Faq from '@/components/Faq.vue'

export default defineComponent({
  name: 'Home',
  components: {
    mint: Mint,
    faq: Faq
  }
})
</script>
