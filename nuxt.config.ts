export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1,maximum-scale=1',
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        {
          type: 'text/javascript',
          src: 'https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js',
          async: true,
        },
      ],
      meta: [{ name: 'theme-color', content: '#018937' }],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-180x180.png' },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image'
  ],
  css: ['~/assets/css/main.css'],

})