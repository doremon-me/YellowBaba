// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://yellowbaba.tech",
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: "en",
        locales: {
          en: "en-Us",
          es: "es-ES",
          fr: "fr-CA",
        },
      },
      xslURL: "/sitemap.xsl",
    }),
  ],
});
