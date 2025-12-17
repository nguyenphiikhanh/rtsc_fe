import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {TabsUIComponentResolver} from 'vue3-tailwind-tabs'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({}) => {
    return {
        plugins: [
            vue(),
            tailwindcss(),
            Components({
                resolvers: [TabsUIComponentResolver()],
            })
        ]
    }
})
