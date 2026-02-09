import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  appType: 'spa', // Ensures SPA fallback behavior
  server: {
    historyApiFallback: true, // Fallback to index.html for history API based routing
    host: true, // Expose to network
  },
})
