<template>
  <div
    class="min-h-screen flex justify-center bg-light text-dark transition-colors duration-300"
  >
    <div class="flex items-stretch justify-center flex-grow">
      <div class="w-1/12 hidden xl:block"></div>
      <div class="w-2/6 lg:w-3/12 hidden md:block">
        <div
          class="flex flex-col items-start justify-start sticky top-0 m-4 p-8 rounded-lg"
        >
          <a class="rounded-full bg-dark-highlight py-1 px-3 my-2" href="">
            <span class="font-medium text-lg">
              Ruta 1
            </span>
          </a>
          <button
            class="bg-light-highlight flex items-center justify-center rounded-full h-10 w-10 mr-2 text-white"
            @click="theme"
          >
            <fa-icon v-if="themeLocal" :icon="['far', 'sun']" />
            <fa-icon v-else :icon="['far', 'moon']" />
          </button>
        </div>
      </div>
      <nuxt />
    </div>

    <nav-bar class="md:hidden" />
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'
import NavBar from '~/components/NavBar.vue'

export default createComponent({
  components: { NavBar },
  setup() {
    const themeLocal = ref<string | null>(null)

    const theme = () => {
      if (document.documentElement.classList.toggle('dark')) {
        localStorage.setItem('theme', 'dark')
        themeLocal.value = 'dark'
      } else {
        localStorage.removeItem('theme')
        themeLocal.value = null
      }
    }

    return { theme, themeLocal }
  }
})
</script>
