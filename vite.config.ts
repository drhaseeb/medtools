import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  // This app now serves the ROOT domain natively (Doctors' Medical Org's
  // homepage lives here too, at "/") — base stays at the default "/" so
  // assets resolve correctly for both the DMO pages and /tools/*. The PWA
  // manifest's start_url/scope below are set explicitly to /tools/ instead
  // of being inferred from `base`, since the installed app must still only
  // ever open the tools section, never the DMO homepage.
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
