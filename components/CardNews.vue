<template>
  <div
    class="bg-dark-highlight rounded-lg shadow border border-gray-transparent"
  >
    <nuxt-link to="/noticias/test" class="block no-underline">
      <img
        v-if="image"
        v-lazy="image"
        class="w-full h-64 object-cover rounded-t-lg"
        alt=""
      />
      <div class="px-6 py-6">
        <header>
          <h2 class="font-light text-2xl mb-2 capitalize">
            {{ title }}
          </h2>
          <div class="text-xs flex items-center mb-2">
            <calendar-icon size="14" />
            <span>
              {{ date }}
            </span>
          </div>
        </header>
        <article>
          <p class="leading-normal mb-4">
            {{ description }}
          </p>
        </article>
      </div>
    </nuxt-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropOptions } from '@vue/composition-api'
import { CalendarIcon } from 'vue-feather-icons'

const cardNewsProps = {
  title: { required: true } as PropOptions<String, true>,
  description: { required: true } as PropOptions<String, true>,
  date: { required: true } as PropOptions<String, true>,
  image: { required: true } as PropOptions<String, true>,
}

export default defineComponent({
  components: { CalendarIcon },
  props: { ...cardNewsProps },
})
</script>

<style lang="postcss" scoped>
img {
  background: linear-gradient(45deg, var(--light-highlight-color), #43c6ac);
}
</style>
