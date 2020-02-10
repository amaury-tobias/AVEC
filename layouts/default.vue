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
        </div>
      </div>
      <nuxt class="mb-32" />
    </div>

    <nav-bar class="md:hidden" />
  </div>
</template>

<script lang="ts">
import {
  createComponent,
  onUnmounted,
  ref,
  onMounted
} from '@vue/composition-api'
import NavBar from '~/components/NavBar.vue'

export default createComponent({
  components: { NavBar },
  setup(_, { root }) {
    const isDarkTheme = ref(false)

    const themeHandler = (e: MediaQueryListEvent) =>
      (isDarkTheme.value = e.matches)

    onMounted(() => {
      if (!root.$isServer)
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .addListener(themeHandler)
    })

    onUnmounted(() => {
      if (!root.$isServer)
        window
          .matchMedia('(prefers-color-scheme: dark)')
          .removeListener(themeHandler)
    })

    return { isDarkTheme }
  }
})
</script>
