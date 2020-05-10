<template>
  <div class="flex-grow">
    <div class="flex flex-col items-end">
      <header class="font-light text-6xl">
        Ajustes
      </header>

      <section>
        <div class="flex flex-col items-end">
          <v-radio v-model="theme" val="system" text="System" name="color" />
          <v-radio v-model="theme" val="dark" text="Dark" name="color" />
          <v-radio v-model="theme" val="light" text="Light" name="color" />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'nuxt-composition-api'
import VRadio from '@/components/VRadio.vue'

export default defineComponent({
  components: { VRadio },
  setup(_, { root }) {
    const theme = computed({
      // @ts-ignore
      get: () => root.$colorMode.preference,
      // @ts-ignore
      set: (val) => (root.$colorMode.preference = val),
    })

    return { theme }
  },
})
</script>
