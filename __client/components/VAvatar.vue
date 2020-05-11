<template functional>
  <img
    :src="props.src"
    loading="lazy"
    class="shadow-xl rounded-full w-56 h-56 border-white border-4"
  />
</template>

<script lang="ts">
import { defineComponent } from 'nuxt-composition-api'

export default defineComponent({
  props: {
    src: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="postcss" scoped>
img {
  @apply object-fill;
  background: linear-gradient(45deg, #86fde8, #acb6e5);
}
</style>
