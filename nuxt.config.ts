// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@intlify/nuxt3',
    '@nuxtjs/color-mode',
    '@nuxtjs/svg',
  ],

  intlify: {
    localeDir: 'lang',
    vueI18n: {
      locale: 'fr',
      fallbackLocale: 'en',
    },
  },

  colorMode: {
    preference: 'system',
    fallback: 'dark',
    classSuffix: '',
  },

  vite: {
    css: {
      preprocessorOptions: {
        // scss: {
        //   additionalData: '@import "@/assets/style/mixin.scss";',
        // },
        sass: {
          additionalData: '@import "@/assets/style/background.sass"',
        },
      },
    },
  },
});
