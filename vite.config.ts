import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // Served under doctorsmedical.org.pk/tools/ via a Cloudflare Pages Function
  // reverse proxy — every asset URL, route, and the PWA scope below must stay
  // consistent with this prefix, or the installed app could resolve outside
  // its own subpath.
  base: '/tools/',
  build: {
    outDir: 'dist/tools',
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: "Doctors' Medical Center",
        short_name: "Doctors' MC",
        description:
          "Evidence-based clinical calculators and risk scores from Doctors' Medical Center.",
        theme_color: '#0F6E63',
        background_color: '#FAF9F5',
        display: 'standalone',
        // Locked to /tools/ deliberately: the installed PWA must only ever
        // load the tools app, never the main site's homepage at "/".
        start_url: '/tools/',
        scope: '/tools/',
        icons: [
          {
            src: 'icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'icons/icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
