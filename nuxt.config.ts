// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Alaei Trading',
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    }
  }
})
