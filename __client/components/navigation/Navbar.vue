<template>
  <div
    class="fixed w-10/12 bg-white dark:bg-black z-40 bottom-0 mb-5 rounded-full transition-opacity duration-300"
    :class="{ 'opacity-0': isScrollingToTop }"
  >
    <div class="flex items-center justify-around py-4">
      <nuxt-link to="/">
        <home-variant-outline />
      </nuxt-link>

      <nuxt-link to="/noticias">
        <newspaper-icon />
      </nuxt-link>

      <!-- <nuxt-link to="/" class="text-green-400">
        <login-variant />
      </nuxt-link> -->

      <nuxt-link to="/perfil">
        <account-outline />
      </nuxt-link>

      <nuxt-link to="/ajustes">
        <cog-outline />
      </nuxt-link>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  onMounted,
  onBeforeUnmount,
} from 'nuxt-composition-api'
import NewspaperIcon from 'mdi-vue/Newspaper.vue'
import HomeVariantOutline from 'mdi-vue/HomeVariantOutline.vue'
import AccountOutline from 'mdi-vue/AccountOutline.vue'
import CogOutline from 'mdi-vue/CogOutline.vue'
import LoginVariant from 'mdi-vue/LoginVariant.vue'
import LogoutVariant from 'mdi-vue/LogoutVariant.vue'

export default defineComponent({
  components: {
    NewspaperIcon,
    HomeVariantOutline,
    AccountOutline,
    CogOutline,
    LoginVariant,
    LogoutVariant,
  },
  setup() {
    const isScrollingToTop = ref(false)
    const prePosition = ref(0)

    function handleScroll() {
      const bottomOfWindow =
        Math.max(
          window.pageYOffset,
          document.documentElement.scrollTop,
          document.body.scrollTop
        ) + window.innerHeight

      if (prePosition.value < bottomOfWindow) isScrollingToTop.value = true
      else if (prePosition.value > bottomOfWindow)
        isScrollingToTop.value = false

      prePosition.value = bottomOfWindow
    }

    onMounted(() => window.addEventListener('scroll', handleScroll))
    onBeforeUnmount(() => window.removeEventListener('scroll', handleScroll))

    return { isScrollingToTop }
  },
})
</script>
