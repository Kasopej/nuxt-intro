// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            omdbAPI_Key: process.env.OMDB_API_KEY
        }
    }
})
