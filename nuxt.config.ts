// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [{
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
        integrity: 'sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM',
        crossorigin: 'anonymous'
      }]
    }
  },
  css: ['bootstrap/dist/css/bootstrap.min.css', '@fortawesome/fontawesome-svg-core/styles.css'],
  modules: [
    '@nuxt/ui'
  ],
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
})
