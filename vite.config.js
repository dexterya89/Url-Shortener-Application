import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173, // or any port you prefer
  },
  define: {
    'process.env': {} // avoids errors when importing env vars
  }
})
