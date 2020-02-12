<template>
  <div class="sticky text-dark px-4" style="top: 0;">
    <div class="flex flex-col justify-around items-stretch w-full h-full">
      <div class="flex flex-col">
        <nuxt-link
          class="flex items-center mb-4 hover:bg-dark-highlight rounded-l-full"
          to="/"
        >
          <span
            class="bg-dark-highlight rounded-full h-10 w-10 flex items-center justify-center"
          >
            <home-icon />
          </span>
          <span class="text-xl ml-2">
            Inicio
          </span>
        </nuxt-link>

        <nuxt-link
          class="flex items-center mb-4 hover:bg-dark-highlight rounded-l-full"
          to="/noticias"
        >
          <span
            class="bg-dark-highlight rounded-full h-10 w-10 flex items-center justify-center"
          >
            <calendar-icon />
          </span>
          <span class="text-xl ml-2">
            Noticias
          </span>
        </nuxt-link>

        <nuxt-link
          class="flex items-center mb-4 hover:bg-dark-highlight rounded-l-full"
          to="/perfil"
        >
          <span
            class="bg-dark-highlight rounded-full h-10 w-10 flex items-center justify-center"
          >
            <user-icon />
          </span>
          <span class="text-xl ml-2">
            Perfil
          </span>
        </nuxt-link>

        <nuxt-link
          class="flex items-center mb-4 hover:bg-dark-highlight rounded-l-full"
          to="/ajustes"
        >
          <span
            class="bg-dark-highlight rounded-full h-10 w-10 flex items-center justify-center"
          >
            <settings-icon />
          </span>
          <span class="text-xl ml-2">
            Ajustes
          </span>
        </nuxt-link>
      </div>
      <div class="text-gray-600 text-xs">
        <p>
          · Seguridad <br />
          · Información adicional <br />
          ·Términos de servicio <br />
          · Contacto · Cerrar sesión <br />
          Mastodon es software libre.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'
import {
  HomeIcon,
  UserIcon,
  SettingsIcon,
  CalendarIcon
} from 'vue-feather-icons'

export default createComponent({
  components: { HomeIcon, UserIcon, SettingsIcon, CalendarIcon }
})
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply bg-dark-highlight;
}
</style>
