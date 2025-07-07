import path from 'path'
import { defineConfig } from 'vite'

import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@styling': path.resolve(__dirname, './src/styling'),
      '@typings': path.resolve(__dirname, './src/typings'),
      '@views': path.resolve(__dirname, './src/views'),
    },
  },
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
})
