<template>
  <navbar class="fixed top-0 right-0 left-0 z-50" />

  <div class="flex flex-col min-h-screen" style="padding-top: 72px">
    <main class="flex-grow">
      <router-view />
    </main>

    <!-- footer -->
    <footer class="py-3 bg-gray-200 text-center">
      Powered By
      <a target="_blank" href="https://acala.network" rel="noopener noreferrer"><img src="@/assets/images/acala.svg" class="h-9 inline-block"></a>
    </footer>
  </div>

  <!-- privacy -->
  <popup id="popup" class="fixed bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-lg m-4 min-w-1-4 max-w-screen md:max-w-2/5">
    <p class="content">By using this website, you have agreed and accepted our <router-link to="/terms-and-condition">terms and condition</router-link>.</p>
  </popup>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Popup from '@/components/Popup.vue'

export default defineComponent({
  name: 'App',
  components: {
    navbar: Navbar,
    popup: Popup
  }
})
</script>

<style lang="scss">
#app {
  main,
  #popup {
    a {
      @apply text-acared;

      &:hover {
        @apply underline;
        text-underline-offset: 3pt;
      }
    }
  }

  #popup {
    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.2);
  }
}
</style>
