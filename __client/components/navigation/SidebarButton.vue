<template>
  <nuxt-link
    class="sidebar-button flex items-center mb-4 border border-transparent rounded-l-full hover:bg-white hover:text-gray-900 dark-hover:border-gray-700 dark-hover:bg-black dark-hover:text-gray-100"
    :to="to"
  >
    <span class="rounded-full h-10 w-10 flex items-center justify-center">
      <slot />
    </span>
    <span class="text-xl ml-2">
      {{ title }}
    </span>
  </nuxt-link>
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'

export default defineComponent({
  props: {
    title: {
      type: String,
      required: true,
    },
    to: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="postcss">
.dark-mode {
  & a.nuxt-link-exact-active.sidebar-button {
    @apply border-gray-700 bg-black text-gray-100;
  }
}
.nuxt-link-exact-active.sidebar-button {
  @apply bg-white text-gray-900;
}
</style>
