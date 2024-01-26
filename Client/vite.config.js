import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
const manifestForPlugin = {
  registerType: "autoUpdate",
  includeAssets: [
    "favicon-196.ico",
    "apple-icon-180.png",
    "manifest-icon-192.maskable.png",
    "manifest-icon-512.maskable.png",
  ],
  manifest: {
    name: "Gian TODO list",
    short_name: "Gian TODOs",
    description: "Una app para crear los TODOs de Gian",
    icons: [],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
  icons: [
    {
      "src": "manifest-icon-192.maskable.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "manifest-icon-192.maskable.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "manifest-icon-512.maskable.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "any"
    },
    {
      "src": "manifest-icon-512.maskable.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
};
export default defineConfig({
  plugins: [react(), VitePWA(manifestForPlugin)],
  css: {
    preprocessorOptions: {
      less: {
        math: "always",
        relativeUrls: true,
        javascriptEnabled: true
      },
    },
  }
})
