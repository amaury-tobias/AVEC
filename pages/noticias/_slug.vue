<template>
  <div class="flex-grow">
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
