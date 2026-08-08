import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { extendedTheme } from './src/styles/extendedTheme'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      theme: {
        extend: extendedTheme,
      },
    }),
  ],
})