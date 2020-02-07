<template functional>
  <div
    class="max-w-md md:max-w-screen-md mx-2 my-3 bg-dark-highlight rounded-lg shadow"
  >
    <a href="#" class="block no-underline">
      <img
        v-if="props.image"
        class="w-full object-cover rounded-t-lg"
        :src="props.image"
        alt=""
      />
      <div class="px-6 py-6">
        <header>
          <h2 class="font-medium text-lg mb-2 capitalize">
            {{ props.title }}
          </h2>
          <div class="text-xs flex items-center my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4 mr-1 feather feather-calendar"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <span>
              {{ props.date }}
            </span>
          </div>
        </header>
        <article>
          <p class="leading-normal mb-4 text-grey-darker">
            {{ props.description }}
          </p>
        </article>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: false
    }
  }
})
</script>
