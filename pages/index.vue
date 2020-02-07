<template>
  <div class="mb-20 flex justify-center items-center flex-grow flex-col">
    <card-news
      v-for="i in 10"
      :key="i"
      :image="i % 2 == 0 ? `https://picsum.photos/500?random=${i}` : undefined"
      title="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      date="20 Ene 2020"
      description="Neiman Marcus, is an American Flagship department store which is
              among the most prestigious luxury stores. However, its iOS App is
              barely satisfactory."
    />
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import CardNews from '~/components/CardNews.vue'

export default createComponent({
  components: { CardNews }
})
</script>
