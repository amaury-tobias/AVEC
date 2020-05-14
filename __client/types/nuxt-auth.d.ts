import Vue, { ComponentOptions } from 'vue'

export interface AuthInstance<T = any> {
  user: Partial<T>
  loggedIn: boolean
  loginWith(strategyName: string, ...args: any): Promise<never>
  login(...args: any): Promise<never>
  logout(): Promise<never>
  hasScope(scopeName: string): boolean
}

declare module 'vue/types/vue' {
  interface Vue {
    $auth: AuthInstance
  }
}

// To hanle middleware AUTH
declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    auth?: boolean | string
  }
}

declare module '@nuxt/types' {
  interface Context {
    $auth: AuthInstance
  }
  interface NuxtAppOptions {
    $auth: AuthInstance
  }
}
