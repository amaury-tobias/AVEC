<template>
  <div class="flex justify-center items-center font-light text-6xl">
    Bienvenido
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import CardNews from '~/components/CardNews.vue'

export default createComponent({
  components: { CardNews }
})
</script>
