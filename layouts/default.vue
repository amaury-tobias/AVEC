<template>
  <div
    class="min-h-screen flex items-center justify-center w-full text-dark transition-colors duration-300 select-none"
  >
    <div class="flex w-full justify-center">
      <sidebar class="hidden md:flex" />

      <div
        class="w-full pb-20 pt-8 px-4 flex items-stretch min-h-screen"
        style="max-width: 600px;"
      >
        <nuxt />
      </div>

      <navbar class="md:hidden" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import Navbar from '~/components/navigation/Navbar.vue'
import Sidebar from '~/components/navigation/Sidebar.vue'

export default defineComponent({
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
