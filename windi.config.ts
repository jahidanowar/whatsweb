import {defineConfig } from 'windicss/helpers'

export default defineConfig({
    theme: {
        extend:{
            fontFamily:{
                sans: "Inter var, Inter, sans-serif",
            },
            colors: {
                greenDark: '#0B3429',
                greenSemiDark: '#059669',
                greenPrimary: '#10B981',
                greenLight: '#ECFDF5',
            }
        }
    }
})