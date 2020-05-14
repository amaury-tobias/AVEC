import Vue from 'vue'

export interface ColorModeInstance {
  preference: string
}

declare module 'vue/types/vue' {
  interface Vue {
    $colorMode: ColorModeInstance
  }
}

declare module '@nuxt/types' {
  interface Context {
    $colorMode: ColorModeInstance
  }
  interface NuxtAppOptions {
    $colorMode: ColorModeInstance
  }
}
