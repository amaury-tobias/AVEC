<template>
  <div class="layout">
    <div class="flex items-stretch justify-between">
      <nuxt />
    </div>
    <div
      class="fixed flex items-center justify-around py-2 mx-auto w-11/12 navbar"
      style="bottom: 1rem;"
    >
      <navbar-menu-button :is-opened="isMenuOpen" @click="theme" />

      <nuxt-link to="/" class="font-medium text-lg">DEMO</nuxt-link>
      <nuxt-link
        to="/"
        class="bg-gray-900 rounded-full h-10 w-10 flex-shrink-0 overflow-hidden flex items-center justify-center"
      >
        <span class="text-purple-400 text-xl font-medium">AT</span>
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent, ref, onBeforeMount } from '@vue/composition-api'
import NavbarMenuButton from '~/components/NavbarMenuButton'

export default createComponent({
  components: { NavbarMenuButton },
  setup() {
    const isMenuOpen = ref(false)
    const t = ref<string | null>('')

    const theme = () => {
      if (document.documentElement.classList.toggle('dark'))
        localStorage.setItem('theme', 'dark')
      else localStorage.removeItem('theme')
    }

    onBeforeMount(() => {
      t.value = localStorage.getItem('theme')
      if (t.value === 'dark') theme()
    })

    return { isMenuOpen, theme }
  }
})
</script>

<style lang="postcss" scoped>
.layout {
  @apply min-h-screen flex justify-center bg-light text-dark;
}

.navbar {
  @apply bg-dark-highlight text-white;
}
</style>
