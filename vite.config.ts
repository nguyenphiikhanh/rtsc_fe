import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {TabsUIComponentResolver} from 'vue3-tailwind-tabs'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Components({
            resolvers: [TabsUIComponentResolver()],
        })
    ],
})
