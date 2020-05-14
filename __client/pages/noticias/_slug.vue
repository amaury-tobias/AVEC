<template>
  <div class="flex-grow">
    <dynamic-markdown :name="slug" />
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from 'nuxt-composition-api'
import DynamicMarkdown from '@/components/markdown/DynamicMarkdown.vue'

export default defineComponent({
  auth: false,
  components: { DynamicMarkdown },
  setup() {
    const { params } = useContext()
    return { slug: params.slug }
  },
})
</script>
