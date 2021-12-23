<template>
  <navbar class="fixed top-0 right-0 left-0 z-50" />

  <main style="margin-top: 72px">
    <router-view />
  </main>

  <!-- footer -->
  <footer class="py-3 bg-gray-200 text-center">
    <img src="@/assets/images/powered_by.webp" class="h-3 inline-block mr-2">
    <a target="_blank" href="https://acala.network" rel="noopenner norefererr"><img src="@/assets/images/acala.svg" class="h-8 inline-block"></a>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    navbar: Navbar
  }
})
</script>
