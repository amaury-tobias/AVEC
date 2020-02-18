<template>
  <div class="flex justify-center items-center mt-4 mb-16 md:my-16 p-2 md:p-0">
    <main>
      <section class="relative mt-16">
        <div class="container mx-auto">
          <div
            class="flex flex-col min-w-0 break-words bg-dark-highlight border-gray-transparent border w-full mb-6 shadow-xl rounded-lg"
          >
            <div class="flex flex-wrap justify-center">
              <div
                class="w-full lg:w-2/6 lg:order-2 flex justify-center items-center -mt-16"
              >
                <div class="relative">
                  <v-avatar alt="user" />
                </div>
              </div>
            </div>

            <div class="text-center mt-4">
              <h3 class="text-4xl font-semibold leading-normal mb-2 mb-2">
                Lorem Ipsum
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
                <div class="mb-2 w-1/3">
                  <a href="#">
                    <external-link-icon class="inline-block" size="16" />
                    portfolio
                  </a>
                </div>

                <div class="mb-2 w-1/3">
                  <a href="#">
                    <twitter-icon class="inline-block" size="16" />
                    lorem-ipsum
                  </a>
                </div>

                <div class="mb-2 w-1/3">
                  <a href="#">
                    <facebook-icon class="inline-block" size="16" />
                    lorem-ipsum
                  </a>
                </div>

                <div class="mb-2 w-1/3">
                  <a href="#">
                    <github-icon class="inline-block" size="16" />
                    lorem-ipsum
                  </a>
                </div>

                <div class="mb-2 w-1/3">
                  <a href="#">
                    <gitlab-icon class="inline-block" size="16" />
                    lorem-ipsum
                  </a>
                </div>
              </div>
            </div>
            <div class="mt-4 pt-4 pb-8 text-center">
              <div class="flex flex-col items-center flex-wrap justify-center">
                <client-only>
                  <vue-tags-input
                    v-model="tag"
                    :tags="tags"
                    allow-edit-tags
                    @tags-changed="(newTags) => (tags = newTags)"
                  />
                </client-only>

                <div class="relative bg-red-500"></div>

                <div class="w-full lg:w-9/12 px-4">
                  <p class="mb-4 text-lg leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorum deleniti laudantium ut repellat necessitatibus
                    pariatur incidunt molestiae odit nemo iure? Quas nesciunt
                    aperiam placeat. Quasi esse itaque atque dicta
                    necessitatibus!
                  </p>
                  <a href="#" class="font-normal text-purple-400">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'
import {
  MapPinIcon,
  TwitterIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon,
  ExternalLinkIcon
} from 'vue-feather-icons'
import VAvatar from '~/components/VAvatar.vue'

export default defineComponent({
  components: {
    MapPinIcon,
    TwitterIcon,
    FacebookIcon,
    GithubIcon,
    GitlabIcon,
    ExternalLinkIcon,
    VAvatar
  },
  setup() {
    const tag = ref('')
    const tags = ref([
      { text: 'Vuejs' },
      { text: 'DevOps' },
      { text: 'Docker' }
    ])

    return { tag, tags }
  }
})
</script>

<style lang="postcss" scoped>
.vue-tags-input {
  @apply bg-light text-dark rounded-lg;
}
</style>
<style lang="postcss">
.ti-new-tag-input {
  @apply bg-light text-dark;
}
.ti-tags {
  @apply justify-center;
}
.ti-input {
  @apply border-gray-transparent rounded-lg !important;
}
.ti-new-tag-input-wrapper {
  width: 100%;
}
</style>
