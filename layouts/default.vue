<template>
  <div
    class="min-h-screen flex items-center justify-center w-full text-dark transition-colors duration-300"
  >
    <div class="flex w-full h-full">
      <div class="flex justify-center w-full h-full min-h-screen">
        <sidebar class="hidden md:flex h-screen" style="min-width: 285px;" />

        <nuxt class="w-full" style="max-width: 600px;" />

        <navbar class="md:hidden" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, onMounted } from '@vue/composition-api'
import Navbar from '~/components/navigation/Navbar.vue'
import Sidebar from '~/components/navigation/Sidebar.vue'

export default createComponent({
  components: { Navbar, Sidebar },
  setup(_, { root }) {
    onMounted(() => {
      if (!root.$isServer) {
        const theme = localStorage.getItem('theme') || 'light'
        document.documentElement.classList.add(theme!)
      }
    })

    return {}
  }
})
</script>
