<template>
  <navbar class="fixed top-0 right-0 left-0 z-10" />

  <div class="flex flex-col min-h-screen" style="padding-top: 72px">
    <main class="grow flex flex-col">
      <router-view />
    </main>

    <!-- footer -->
    <acala-footer />
  </div>

  <!-- privacy -->
  <popup id="popup" class="fixed bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-lg m-4 min-w-1-4 max-w-screen md:max-w-2/5">
    <p class="content">
      Use of the tools on this website is strictly at your own risk and is governed by the
      <router-link to="/terms-and-conditions">Terms and Conditions</router-link>.
    </p>
    <p class="content">
      In short: We cannot undo, reverse, or restore any transaction involving any punk. You
      take the sole responsibility.
    </p>
  </popup>
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Popup from '@/components/Popup.vue'
import AcalaFooter from '@/components/Footer.vue'
</script>

<style lang="scss">
@import "@/assets/scss/main";

#app {
  #popup {
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
  }
}
</style>
