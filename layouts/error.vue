<template>
  <div class="flex flex-col flex-grow justify-center font-light text-center">
    <p class="text-6xl">{{ statusCode }}</p>
    <p v-if="statusCode === 404" class="text-xl text-gray-600">
      Lo sentimos pero esta pagina no fue encontrada
      <br />
      <nuxt-link class="underline" to="/">
        ir al inicio
      </nuxt-link>
    </p>
    <p v-else class="text-xl text-gray-600">
      Ocurrio un error inesperado
      <br />
      <nuxt-link class="underline" to="/">
        ir al inicio
      </nuxt-link>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from '@vue/composition-api'

export default defineComponent({
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  setup({ error }) {
    const statusCode = computed(() => (error && error.statusCode) || 500)
    return { statusCode }
  }
})
</script>
