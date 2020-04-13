<template>
  <div class="h-screen w-1/4 xl:w-1/6 sticky top-0">
    <div class="text-dark px-4">
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

          <nuxt-link
            class="flex items-center mb-4 hover:bg-dark-highlight rounded-l-full"
            to="/login"
          >
            <span
              class="bg-dark-highlight rounded-full h-10 w-10 flex items-center justify-center"
            >
              <log-in-icon />
            </span>
            <span class="text-xl ml-2">
              Iniciar Sesion
            </span>
          </nuxt-link>

          <nuxt-link
            class="flex items-center mb-4 hover:bg-dark-highlight rounded-l-full"
            to="/logout"
          >
            <span
              class="bg-dark-highlight rounded-full h-10 w-10 flex items-center justify-center"
            >
              <log-out-icon />
            </span>
            <span class="text-xl ml-2">
              Cerrar Sesion
            </span>
          </nuxt-link>
        </div>
        <div id="disc" class="text-xs font-light">
          <p>
            <a href="">
              · Información adicional
            </a>
          </p>

          <p>
            <a href="">
              ·Términos de servicio
            </a>
          </p>

          <p>
            <a href="">
              · Contacto
            </a>
          </p>

          <p>
            <a href="#">
              · Cerrar sesión
            </a>
          </p>

          <p>
            <a
              class="inline-flex items-center"
              href="https://github.com/amaury-tobias"
              rel="noopener noreferrer"
              target="_blank"
            >
              <external-link-icon size="10" class="mr-1" />
              Amaury Tobias.
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import {
  HomeIcon,
  UserIcon,
  SettingsIcon,
  CalendarIcon,
  LogInIcon,
  LogOutIcon,
  ExternalLinkIcon,
} from 'vue-feather-icons'

export default defineComponent({
  components: {
    HomeIcon,
    UserIcon,
    SettingsIcon,
    CalendarIcon,
    LogInIcon,
    LogOutIcon,
    ExternalLinkIcon,
  },
})
</script>

<style lang="postcss" scoped>
.nuxt-link-exact-active {
  @apply bg-dark-highlight;
}

a {
  @apply text-dark no-underline;
}
#disc {
  & a {
    @apply text-gray-600;
  }
}
</style>
