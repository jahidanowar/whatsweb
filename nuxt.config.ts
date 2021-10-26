import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    meta:{
        link: [
            // { rel: 'icon', type: 'image/png', href: '/favicon.png' }
            {
                rel: "preconnect",
                href: "https://rsms.me/",
            },
            {
                rel: "stylesheet",
                href: "https://rsms.me/inter/inter.css",
            }
        ]
    },
    buildModules: [
        'nuxt-windicss',
    ],
})
