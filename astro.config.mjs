import { defineConfig } from "astro/config"
import sitemap from "@astrojs/sitemap"
import react from "@astrojs/react"
import image from "@astrojs/image"
import tailwind from "@astrojs/tailwind"

export default defineConfig({
  site: "https://uses.h-9.info",
  integrations: [sitemap(), react(), image(), tailwind()]
})
