import { defineNuxtConfig } from 'nuxt3'

// <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
// <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
export default defineNuxtConfig({
    meta:{
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon.png' },
            {
                rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png'
            },
            {
                rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'
            },
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
