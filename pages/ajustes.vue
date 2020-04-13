<template>
  <div class="flex-grow">
    <div class="flex flex-col items-end">
      <header class="font-light text-6xl">
        Ajustes
      </header>

      <section>
        <div>
          <v-switch
            v-model="isDarkMode"
            text="Dark Mode"
            @change="changeTheme"
          />
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from '@vue/composition-api'
import VSwitch from '~/components/VSwitch.vue'
import { useTheme, setDarkMode } from '~/state/theme'

export default defineComponent({
  components: { VSwitch },
  setup() {
    const { isDarkMode } = useTheme()

    onMounted(() => {
      isDarkMode.value = localStorage.getItem('theme') === 'dark'
    })

    const changeTheme = (s: boolean) => {
      setDarkMode(s)
    }

    return { isDarkMode, changeTheme }
  },
})
</script>
