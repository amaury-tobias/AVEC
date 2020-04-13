import path from 'path'
import { Configuration } from '@nuxt/types'
import markdownIt from 'markdown-it'

const config: Configuration = {
  server: { host: '0.0.0.0' },
  router: {
    base: '/e-front/',
  },
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
        content: process.env.npm_package_description || '',
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
    '~/plugins/composition-api',
    '~/plugins/click-outside-directive',
    { src: '~/plugins/vue-tags-input', ssr: false },
  ],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss',
  ],
  modules: ['@nuxtjs/axios'],
  axios: {},
  tailwindcss: {
    purgeCSSInDev: false,
  },
  purgeCSS: {
    paths: [
      'components/**/*.vue',
      'components/**/*.ts',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
    ],
    whitelistPatterns: [/svg-inline--fa/],
  },

  build: {
    extend(config, _ctx) {
      // eslint-disable-next-line no-unused-expressions
      config.module?.rules?.push({
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
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[name]__[local]__[hash:base64:5]',
        },
      },
    },
  },
}

export default config
