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
                  <img
                    alt="..."
                    src="https://picsum.photos/500"
                    class="shadow-xl rounded-full h-auto border-white border-4"
                    style="max-width: 14rem;"
                  />
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

              <div class="mb-2">
                <a href="#">
                  <twitter-icon class="inline-block" size="16" />
                  lorem-ipsum
                </a>
              </div>

              <div class="mb-2">
                <a href="#">
                  <facebook-icon class="inline-block" size="16" />
                  lorem-ipsum
                </a>
              </div>

              <div class="mb-2">
                <a href="#">
                  <github-icon class="inline-block" size="16" />
                  lorem-ipsum
                </a>
              </div>

              <div class="mb-2">
                <a href="#">
                  <gitlab-icon class="inline-block" size="16" />
                  lorem-ipsum
                </a>
              </div>
            </div>
            <div class="mt-4 pt-4 pb-8 text-center">
              <div class="flex flex-wrap justify-center">
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
import { createComponent } from '@vue/composition-api'
import {
  MapPinIcon,
  TwitterIcon,
  FacebookIcon,
  GithubIcon,
  GitlabIcon
} from 'vue-feather-icons'

export default createComponent({
  components: { MapPinIcon, TwitterIcon, FacebookIcon, GithubIcon, GitlabIcon },
  setup() {}
})
</script>

<style lang="postcss" scoped>
.bg {
  background: linear-gradient(
      45deg,
      rgba(22, 31, 43, 0.5) 0%,
      rgba(22, 31, 43, 0.5) 12.5%,
      rgba(53, 28, 54, 0.5) 12.5%,
      rgba(53, 28, 54, 0.5) 25%,
      rgba(83, 25, 65, 0.5) 25%,
      rgba(83, 25, 65, 0.5) 37.5%,
      rgba(114, 22, 76, 0.5) 37.5%,
      rgba(114, 22, 76, 0.5) 50%,
      rgba(144, 20, 86, 0.5) 50%,
      rgba(144, 20, 86, 0.5) 62.5%,
      rgba(175, 17, 97, 0.5) 62.5%,
      rgba(175, 17, 97, 0.5) 75%,
      rgba(205, 14, 108, 0.5) 75%,
      rgba(205, 14, 108, 0.5) 87.5%,
      rgba(236, 11, 119, 0.5) 87.5%,
      rgba(236, 11, 119, 0.5) 100%
    ),
    linear-gradient(
      135deg,
      rgb(188, 0, 159) 0%,
      rgb(188, 0, 159) 12.5%,
      rgb(173, 4, 150) 12.5%,
      rgb(173, 4, 150) 25%,
      rgb(158, 7, 141) 25%,
      rgb(158, 7, 141) 37.5%,
      rgb(143, 11, 132) 37.5%,
      rgb(143, 11, 132) 50%,
      rgb(129, 15, 124) 50%,
      rgb(129, 15, 124) 62.5%,
      rgb(114, 19, 115) 62.5%,
      rgb(114, 19, 115) 75%,
      rgb(99, 22, 106) 75%,
      rgb(99, 22, 106) 87.5%,
      rgb(84, 26, 97) 87.5%,
      rgb(84, 26, 97) 100%
    );
}
</style>
