import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import istanbul from 'vite-plugin-istanbul'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    istanbul({
      include: 'src/*',
      exclude: ['node_modules', 'test/'],
      extension: ['.js', '.jsx'],
      requireEnv: true
    })
  ],
  base: '/Rick-Morty/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
