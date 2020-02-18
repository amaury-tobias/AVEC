<template>
  <label
    for="checked"
    class="mt-3 inline-flex items-center cursor-pointer focus:outline-none"
  >
    <span class="mr-3 text-2xl font-light">{{ text }}</span>

    <span class="relative">
      <span class="block w-10 h-6 bg-gray-400 rounded-full shadow-inner"></span>
      <span
        class="absolute block w-4 h-4 mt-1 ml-1 rounded-full shadow inset-y-0 left-0 focus-within:shadow-outline transition-transform duration-300 ease-in-out transform"
        :class="{
          'translate-x-full bg-light-highlight': value,
          'bg-white': !value
        }"
      >
        <input
          id="checked"
          type="checkbox"
          class="absolute opacity-0 w-0 h-0"
          @change="$emit('change', !value)"
        />
      </span>
    </span>
  </label>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  model: { event: 'change' },
  props: {
    value: {
      type: Boolean,
      required: true
    },
    text: {
      type: String,
      default: 'v-switch'
    }
  }
})
</script>
