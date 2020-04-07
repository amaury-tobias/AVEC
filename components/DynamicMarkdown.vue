<template>
  <div class="h-full mx-4">
    <header v-if="!error" class="mb-10">
      <h1 class="mb-4 font-thin text-6xl capitalize">
        {{ attrs.title }}
      </h1>
      <h2 class="font-light capitalize">
        {{ attrs.author }}
      </h2>
      <p class="font-light capitalize">
        {{ attrs.date }}
      </p>
    </header>

    <article :class="{ 'flex h-full items-center justify-center': error }">
      <component :is="markdownContent" />
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import ErrorComponent from '~/layouts/error.vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup({ name }) {
    const attrs = ref({})
    const error = ref(false)

    const markdownContent = () =>
      import(`~/articles/${name}.md`)
        .then((fmd) => {
          attrs.value = fmd.attributes
          return {
            extends: fmd.vue.component
          }
        })
        .catch(() => {
          error.value = true
          return ErrorComponent
        })

    return {
      error,
      attrs,
      markdownContent
    }
  }
})
</script>

<style lang="postcss">
img[loading='lazy'] {
  @apply my-4 rounded-lg;
}
blockquote {
  @apply relative p-2 m-2 italic border-l-4;
}
</style>
