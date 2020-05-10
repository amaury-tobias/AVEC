<template>
  <div class="grid grid-cols-1 row-gap-4 mb-4 md:mb-0">
    <card-news v-for="i in 10" :key="i" v-bind="cardNewsProps" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import CardNews from '@/components/CardNews.vue'

export default defineComponent({
  components: { CardNews },
  setup() {
    const cardNewsProps = ref({
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      date: '20 Ene 2020',
      image: `https://picsum.photos/500?random=${Math.random()}`,
      description: `Neiman Marcus, is an American Flagship department store which is
              among the most prestigious luxury stores. However, its iOS App is
              barely satisfactory.`,
    })

    return { cardNewsProps }
  },
})
</script>
