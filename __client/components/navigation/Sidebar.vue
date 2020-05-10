<template>
  <div class="h-screen w-1/4 xl:w-1/6 sticky top-0">
    <div class="px-4">
      <div class="flex flex-col justify-around items-stretch w-full h-full">
        <div class="flex flex-col">
          <sidebar-button to="/" title="Inicio">
            <home-variant-outline />
          </sidebar-button>
          <sidebar-button to="/noticias" title="Noticias">
            <calendar-blank-outline />
          </sidebar-button>
          <sidebar-button to="/perfil" title="Perfil">
            <account-outline />
          </sidebar-button>
          <sidebar-button to="/ajustes" title="Ajustes">
            <cog-outline />
          </sidebar-button>
          <sidebar-button to="/login" title="Iniciar Sesión">
            <login-variant />
          </sidebar-button>
          <sidebar-button to="/logout" title="Cerrar Sesión">
            <logout-variant />
          </sidebar-button>
        </div>
        <ul class="text-xs font-light text-gray-600">
          <li><a href="">· Información adicional</a></li>
          <li><a href="">·Términos de servicio</a></li>
          <li><a href="">· Contacto</a></li>
          <li><a href="#">· Cerrar sesión</a></li>
          <li>
            <a
              class="inline-flex items-center"
              href="https://github.com/amaury-tobias"
              rel="noopener noreferrer"
              target="_blank"
            >
              <external-link-icon size="10" class="mr-1" />
              Amaury Tobias.
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import CalendarBlankOutline from 'mdi-vue/CalendarBlankOutline.vue'
import HomeVariantOutline from 'mdi-vue/HomeVariantOutline.vue'
import AccountOutline from 'mdi-vue/AccountOutline.vue'
import CogOutline from 'mdi-vue/CogOutline.vue'
import LoginVariant from 'mdi-vue/LoginVariant.vue'
import LogoutVariant from 'mdi-vue/LogoutVariant.vue'
import ExternalLinkIcon from 'mdi-vue/OpenInNew.vue'
import SidebarButton from '@/components/navigation/SidebarButton.vue'

export default defineComponent({
  components: {
    SidebarButton,
    CalendarBlankOutline,
    HomeVariantOutline,
    AccountOutline,
    CogOutline,
    LoginVariant,
    LogoutVariant,
    ExternalLinkIcon,
  },
})
</script>
