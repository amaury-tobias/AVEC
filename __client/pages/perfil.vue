<template>
  <main class="mt-16">
    <section class="bg-white dark:bg-gray-900 shadow-xl rounded-lg px-2 pb-8">
      <div class="flex justify-center">
        <div class="w-full flex justify-center items-center -mt-16">
          <v-avatar />
        </div>
      </div>

      <div class="text-center mt-4">
        <h3 class="text-4xl font-semibold leading-normal mb-2">
          Nombre Usuario Generico
        </h3>

        <div
          class="text-sm leading-normal mb-2 text-gray-500 font-bold uppercase"
        >
          <map-pin-icon class="inline-block" size="16" />
          Monterrey, México
        </div>

        <div class="mb-2 mt-8">
          Solution Manager - Creative Tim Officer
        </div>
        <div class="mb-2">
          University of Computer Science
        </div>

        <div class="flex flex-wrap justify-center items-center">
          <div class="mb-2 w-1/2 md:w-1/3">
            <a href="#" rel="noopener noreferrer" target="_blank">
              <external-link-icon class="inline-block" size="16" />
              portfolio
            </a>
          </div>

          <div class="mb-2 w-1/2 md:w-1/3">
            <a href="#">
              <devianart-icon class="inline-block" size="16" />
              lorem-ipsum
            </a>
          </div>

          <div class="mb-2 w-1/2 md:w-1/3">
            <a href="#">
              <artstation-icon class="inline-block" size="16" />
              lorem-ipsum
            </a>
          </div>

          <div class="mb-2 w-1/2 md:w-1/3">
            <a href="#">
              <twitter-icon class="inline-block" size="16" />
              lorem-ipsum
            </a>
          </div>

          <div class="mb-2 w-1/2 md:w-1/3">
            <a href="#">
              <facebook-icon class="inline-block" size="16" />
              lorem-ipsum
            </a>
          </div>

          <div class="mb-2 w-1/2 md:w-1/3">
            <a href="#">
              <github-icon class="inline-block" size="16" />
              lorem-ipsum
            </a>
          </div>

          <div class="mb-4 w-1/2 md:w-1/3">
            <a href="#">
              <gitlab-icon class="inline-block" size="16" />
              lorem-ipsum
            </a>
          </div>
        </div>
      </div>

      <div class="text-center">
        <div class="flex flex-col items-center flex-wrap justify-center">
          <div v-if="isEdit" class="px-4 mb-4">
            <client-only>
              <vue-tags-input
                v-model="tag"
                :tags="tags"
                allow-edit-tags
                @tags-changed="(newTags) => (tags = newTags)"
              />
            </client-only>
          </div>

          <div v-else class="px-4 mb-4 flex flex-wrap justify-center gap-1">
            <span v-for="(tag, i) in tags" :key="i" class="tag">
              {{ tag.text }}
            </span>
          </div>

          <button
            class="py-1 px-3 focus:outline-none bg-purple-500 rounded-lg text-white"
            @click="isEdit = !isEdit"
          >
            <edit-icon size="12" class="inline-block" />
            Editar
          </button>

          <div class="w-full lg:w-9/12 px-4">
            <p class="mb-4 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              deleniti laudantium ut repellat necessitatibus pariatur incidunt
              molestiae odit nemo iure? Quas nesciunt aperiam placeat. Quasi
              esse itaque atque dicta necessitatibus!
            </p>
            <a
              href="mailto:contacto@amaurytq.dev"
              class="text-sm text-purple-400"
            >
              Contacto
            </a>
            <br />
            <a
              class="text-xs text-gray-600 cursor-pointer"
              @click="$auth.logout()"
            >
              Cerrar Sesión
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'nuxt-composition-api'

import DevianartIcon from 'mdi-vue/Deviantart.vue'
import ArtstationIcon from 'mdi-vue/Artstation.vue'
import GitlabIcon from 'mdi-vue/Gitlab.vue'
import GithubIcon from 'mdi-vue/Github.vue'
import FacebookIcon from 'mdi-vue/Facebook.vue'
import TwitterIcon from 'mdi-vue/Twitter.vue'
import MapPinIcon from 'mdi-vue/MapMarker.vue'
import ExternalLinkIcon from 'mdi-vue/OpenInNew.vue'
import EditIcon from 'mdi-vue/CircleEditOutline.vue'

import VAvatar from '@/components/VAvatar.vue'

export default defineComponent({
  components: {
    MapPinIcon,
    TwitterIcon,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    ExternalLinkIcon,
    EditIcon,
    VAvatar,
    DevianartIcon,
    ArtstationIcon,
  },
  setup() {
    const isEdit = ref(false)
    const tag = ref('')
    const tags = ref([
      { text: 'Vuejs' },
      { text: 'DevOps' },
      { text: 'Docker' },
    ])

    return { isEdit, tag, tags }
  },
})
</script>

<style lang="postcss" scoped>
.vue-tags-input {
  @apply rounded-lg;
}
.tag {
  background: #5c6bc0;
  @apply rounded px-2 text-white;
}
</style>
<style lang="postcss">
/* .ti-new-tag-input {
  @apply bg-light text-dark;
} */
.ti-tags {
  @apply justify-center;
}
.ti-input {
  @apply rounded-lg !important;
}
.ti-new-tag-input-wrapper {
  width: 100%;
}
</style>
