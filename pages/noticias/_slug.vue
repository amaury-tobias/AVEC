<template>
  <div>
    <dynamic-markdown :name="slug" />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import DynamicMarkdown from '~/components/DynamicMarkdown.vue'

export default createComponent({
  components: { DynamicMarkdown },
  asyncData({ params }) {
    return {
      slug: params.slug
    }
  }
})
</script>
