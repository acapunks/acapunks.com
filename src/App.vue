<template>
  <navbar class="fixed top-0 right-0 left-0 z-10" />

  <div class="flex flex-col min-h-screen" style="padding-top: 72px">
    <main class="grow flex flex-col">
      <router-view />
    </main>

    <!-- footer -->
    <footer class="py-3 bg-gray-200 text-center">
      <span class="relative" style="top: 0.13em; font-size:1.05em; ">Powered By </span>
      <a target="_blank" href="https://acala.network" rel="noopener noreferrer"><img src="@/assets/images/acala.svg" class="h-9 inline-block"></a>
    </footer>
  </div>

  <!-- privacy -->
  <popup id="popup" class="fixed bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-lg m-4 min-w-1-4 max-w-screen md:max-w-2/5">
    <p class="content">By using this website, you have agreed and accepted our <router-link to="/terms-and-condition">terms and condition</router-link>.</p>
  </popup>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Popup from '@/components/Popup.vue'
</script>

<style lang="scss">
#app {
  #popup {
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
  }
}
</style>
