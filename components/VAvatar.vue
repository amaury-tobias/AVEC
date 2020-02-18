<template functional>
  <img
    v-lazy="props.src"
    class="shadow-xl rounded-full h-auto w-56 border-white border-4"
    :alt="props.alt"
  />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    src: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  }
})
</script>

<style lang="postcss" scoped>
img {
  @apply object-fill transition-opacity duration-1000;
  &[lazy='loading'] {
    @apply opacity-0;
    filter: blur(150px);
  }
  &[lazy='loaded'] {
    @apply opacity-100;
  }
  background: linear-gradient(45deg, #86fde8, #acb6e5);
}
</style>
