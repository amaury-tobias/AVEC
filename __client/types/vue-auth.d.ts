import Vue, { ComponentOptions } from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $auth: {
      user: { username: string }
      loggedIn: boolean
      login: Promise<void>
      logout: Promise<void>
      hasScope: (scope: string) => boolean
    }
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    auth?: boolean
  }
}
