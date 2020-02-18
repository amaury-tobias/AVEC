<template>
  <div
    class="flex flex-col justify-center items-center h-full mt-4 mb-20 md:my-16 p-2 md:p-0"
  >
    <dynamic-markdown :name="slug" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import DynamicMarkdown from '~/components/DynamicMarkdown.vue'

export default defineComponent({
  components: { DynamicMarkdown },
  asyncData({ params }) {
    return {
      slug: params.slug
    }
  }
})
</script>
