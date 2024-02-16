// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/content',
    ],
    colorMode: {
        classSuffix: ''
    },
    content: {
        highlight: {
            theme: {
                // Default theme (same as single string)
                default: 'github-light',
                // Theme used if `html.dark`
                dark: 'github-dark',
                // Theme used if `html.sepia`
                sepia: 'monokai'
            }
        }
    },
    app: {
        pageTransition: { name: 'page', mode: 'out-in' }
    },
    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        }
    }
})
