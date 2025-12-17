import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import {TabsUIComponentResolver} from 'vue3-tailwind-tabs'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd());

    return {
        plugins: [
            vue(),
            tailwindcss(),
            Components({
                resolvers: [TabsUIComponentResolver()],
            })
        ],
        server: {
            proxy: {
                '/api': {
                    target: env.VITE_API_BASE_URL,
                    changeOrigin: true,
                    secure: false,
                }
            }
        }
    }
})
