// ¯\_(ツ)_/¯
import { Configuration } from '@nuxt/types'

const config: Configuration = {
  mode: 'universal',
  head: {
    title: 'Egresados',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  loading: { color: '#000' },
  css: [],
  plugins: ['~/plugins/composition-api'],
  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/tailwindcss'
  ],
  modules: ['@nuxtjs/axios'],
  axios: {},

  build: {
    extend(_config, _ctx) {},
    postcss: {
      preset: { autoprefixer: {} }
    },
    loaders: {
      cssModules: {
        modules: {
          localIdentName: '[name]__[local]__[hash:base64:5]'
        }
      }
    }
  }
}

export default config
