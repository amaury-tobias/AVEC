<template>
  <div class="min-h-screen flex justify-center bg-light text-dark">
    <div class="flex items-stretch justify-between">
      <nuxt />
    </div>

    <nav-bar />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import NavBar from '~/components/NavBar.vue'

export default createComponent({
  components: { NavBar },
  setup() {
    return {}
  }
})
</script>
