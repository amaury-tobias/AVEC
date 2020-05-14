import path from 'path'
import { Configuration } from '@nuxt/types'
import markdownIt from 'markdown-it'

const port = process.env.NUXT_PORT
const host = process.env.NUXT_HOST || '0.0.0.0'
const isDev = process.env.NODE_ENV === 'development'
const API_URL = process.env.API_URL || 'http://api'
const API_PORT = process.env.API_PORT || 5000
const backendHost = `${API_URL}:${API_PORT}`

const config: Configuration = {
  server: { host: '0.0.0.0', port },
  mode: 'universal',
  head: {
    title: 'Egresados',
    htmlAttrs: { lang: 'es', class: 'no-scrollbar' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Egresados LMAD',
      },
      {
        name: 'author',
        content: 'Isidro Amaury Tobias Quiroz <amaury.tobiasqr@gmail.com>',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  loading: { color: 'var(--dark-color)' },
  css: [],
  plugins: [
    '@/plugins/click-outside-directive',
    { src: '@/plugins/vue-tags-input', ssr: false },
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@teamnovu/nuxt-breaky',
    'nuxt-composition-api',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  axios: {
    host,
    port,
    prefix: '/api',
    proxy: true,
  },
  proxy: {
    '/api': backendHost,
  },
  auth: {
    localStorage: false,
    strategies: {
      local: {
        endpoints: {
          login: { url: '/auth/login' },
          logout: false,
          user: { url: '/auth/user', propertyName: 'user' },
        },
      },
    },
  },
  router: {
    middleware: ['auth'],
  },
  tailwindcss: {
    exposeConfig: isDev,
  },
  build: {
    extend(config, _ctx) {
      config.module!.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'articles'),
        options: {
          mode: ['vue-component'],
          vue: {
            root: 'markdown-body',
          },
          markdownIt: markdownIt().use((md) => {
            const defaultImageRenderer = md.renderer.rules.image!
            md.renderer.rules.image = (tokens, idx, options, env, self) => {
              const token = tokens[idx]
              token.attrPush(['loading', 'lazy'])
              return defaultImageRenderer(tokens, idx, options, env, self)
            }
          }),
        },
      })
    },
    postcss: {
      preset: { autoprefixer: {} },
    },
  },
}

export default config
