import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:'https://atunn25.github.io/veterinaria',
  server: {
    proxy: {
      '/api': {
        target: 'https://veterinaria-production-b14c.up.railway.app',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
