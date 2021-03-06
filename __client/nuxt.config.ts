import path from 'path'
import { Configuration } from '@nuxt/types'
import markdownIt from 'markdown-it'
const { NUXT_PORT, NODE_ENV, API_HOST, API_PORT } = process.env
const isDev = NODE_ENV === 'development'
const backendHost = `http://${API_HOST}:${API_PORT}`

const config: Configuration = {
  server: { host: '0.0.0.0', port: NUXT_PORT },
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
  loading: { color: '#9f7aea' },
  css: [],
  plugins: [{ src: '@/plugins/vue-tags-input', ssr: false }],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    ['@teamnovu/nuxt-breaky', { position: 'topRight' }],
    'nuxt-composition-api',
  ],
  modules: ['@nuxtjs/axios', '@nuxtjs/auth'],
  axios: {
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
          user: { url: '/auth/user' },
        },
      },
    },
    cookie: {
      options: {
        secure: !isDev,
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
