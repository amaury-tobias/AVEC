<template>
  <div class="bg-dark-highlight h-screen sticky top-0">
    <div class="flex flex-col items-start justify-start m-4 p-8 rounded-lg">
      <a
        class="rounded-full bg-dark-highlight py-1 px-3 my-2 flex items-baseline"
        href=""
      >
        <fa-icon icon="home" />
        <span class="font-normal text-xl">
          Inicio
        </span>
      </a>
      <a
        class="rounded-full bg-dark-highlight py-1 px-3 my-2 felx items-baseline"
        href=""
      >
        <fa-icon :icon="['far', 'user-circle']" />
        <span class="font-normal text-xl">
          Perfil
        </span>
      </a>
      <a
        class="rounded-full bg-dark-highlight py-1 px-3 my-2 flex items-baseline"
        href=""
      >
        <fa-icon icon="cog" />
        <span class="font-normal text-xl">
          Ajustes
        </span>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@vue/composition-api'

export default createComponent({})
</script>
