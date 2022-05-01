import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin()
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/micro/api/': {
        target: 'http://8.129.175.188:7000/',
        changeOrigin: true
        // rewrite: (path) => path.replace(/^\/api/, '')
      }

    }
  }
})
