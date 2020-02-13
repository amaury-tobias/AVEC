<template>
  <div class="flex flex-col justify-center items-end h-full px-8 pt-16 md:px-0">
    <header class="font-light text-6xl">
      Ajustes
    </header>
    <section>
      <div>
        <v-switch v-model="isDarkMode" text="Dark Mode" @change="changeTheme" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { createComponent, onMounted } from '@vue/composition-api'
import VSwitch from '~/components/VSwitch.vue'
import { useTheme, setDarkMode } from '~/state/theme'

export default createComponent({
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
  }
})
</script>
