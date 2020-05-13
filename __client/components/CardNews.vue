<template>
  <div
    class="bg-white dark:bg-gray-900 rounded-lg shadow border border-transparent"
  >
    <nuxt-link to="/noticias/test" class="block no-underline">
      <img
        v-if="image"
        loading="lazy"
        class="w-full object-cover rounded-t-lg"
        alt=""
        src="https://picsum.photos/1080"
      />
      <div class="px-6 py-6">
        <header>
          <h2 class="font-light text-2xl mb-2 capitalize">
            {{ title }}
          </h2>
          <div class="text-xs flex items-center mb-2">
            <calendar-blank-outline />
            <span>
              {{ date }}
            </span>
          </div>
        </header>
        <article>
          <p class="leading-normal mb-4 text-gray-600">
            {{ description }}
          </p>
        </article>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropOptions } from 'nuxt-composition-api'
import CalendarBlankOutline from 'mdi-vue/CalendarBlankOutline.vue'

const cardNewsProps = {
  title: { required: true } as PropOptions<String, true>,
  description: { required: true } as PropOptions<String, true>,
  date: { required: true } as PropOptions<String, true>,
  image: { required: true } as PropOptions<String, true>,
}

export default defineComponent({
  props: { ...cardNewsProps },
  components: { CalendarBlankOutline },
})
</script>

<style lang="postcss" scoped>
img {
  background: linear-gradient(45deg, var(--light-highlight-color), #43c6ac);
}
</style>
