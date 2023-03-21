// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            titleTemplate: "%s - Nuxt Movies App",
        }
    },
    runtimeConfig: {
        public: {
            omdbAPI_Key: process.env.OMDB_API_KEY
        }
    },
    modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt',],
    pinia: {
        autoImports: ['defineStore']
    }
})
