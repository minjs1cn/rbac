import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: true,
      imports: [
        "vue",
        "@vueuse/core",
        "pinia",
      ]
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "@views": path.resolve(__dirname, 'src/views'),
      "@comps": path.resolve(__dirname, 'src/components'),
      "@utils": path.resolve(__dirname, 'src/utils'),
      "@stories": path.resolve(__dirname, 'src/stories'),
      "@assets": path.resolve(__dirname, 'src/assets'),
      "@hooks": path.resolve(__dirname, 'src/hooks')
    }
  }
})
