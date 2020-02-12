<template>
  <div class="mt-32">
    <header class="mb-10">
      <h1 class="mb-4 font-thin text-6xl capitalize">
        {{ attrs.title }}
      </h1>
      <h2 class="font-light text-xl capitalize">{{ attrs.author }}</h2>
      <p class="font-light">{{ attrs.date }}</p>
    </header>
    <article>
      <component :is="markdownContent" />
    </article>
  </div>
</template>

<script lang="ts">
import { createComponent, ref } from '@vue/composition-api'
import LazyImage from '~/components/LazyImage.vue'

export default createComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup({ name }) {
    const attrs = ref({})
    const markdownContent = () =>
      import(`~/articles/${name}.md`).then((fmd) => {
        attrs.value = fmd.attributes
        return {
          extends: fmd.vue.component,
          components: { LazyImage }
        }
      })

    return { attrs, markdownContent }
  }
})
</script>

<style lang="postcss">
blockquote {
  /* @apply border-l-4 pl-2 border-dark text-dark; */
  @apply relative p-2 m-2 italic border-l-4;
}
</style>
