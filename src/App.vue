<template>
  <navbar class="fixed top-0 right-0 left-0 z-50" />

  <main style="margin-top: 72px">
    <router-view />
  </main>

  <!-- footer -->
  <footer class="py-3 bg-gray-200 text-center">
    Powered By
    <a target="_blank" href="https://acala.network" rel="noopenner norefererr"><img src="@/assets/images/acala.svg" class="h-9 inline-block relative" style="bottom: 1.1pt;"></a>
  </footer>

  <!-- privacy -->
  <popup
    title="FBI is watching you!"
    content="A battle for voting rights. An uncertain future for abortion rights. Inequities in housing, caregiving, and healthcare access. Millions turn to Vox to understand complex problems such as these, and potential solutions. Financial gifts from readers help us plan that work and keep it free. Give today to help us hit our goal of 6,000 new financial contributions by the new year."
    class="fixed bottom-0 right-0 bg-gray-100 px-6 py-4 rounded-lg m-2 shadow-md"
    style="min-width: 20vw; max-width: 30vw"
  />
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
