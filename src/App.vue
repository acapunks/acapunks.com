<template>
  <navbar class="fixed top-0 right-0 left-0" />

  <main style="margin-top: 72px" class="acala-gradient-bg-light min-h-screen">
    <router-view />
  </main>

  <!-- footer -->
  <footer class="py-3 bg-white">
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
