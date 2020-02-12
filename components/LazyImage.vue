<template functional>
  <img v-lazy="props.src" :alt="props.alt" />
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    src: {
      type: String,
      required: true
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
  @apply my-4 rounded-lg;
  @apply transition-opacity duration-1000 opacity-0;
  &[lazy='loading'] {
    @apply opacity-100;
    filter: blur(150px);
  }
  &[lazy='loaded'] {
    @apply opacity-100;
  }
}
</style>
