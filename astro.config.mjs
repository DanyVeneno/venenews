import { defineConfig } from "astro/config";
import { settings } from "./src/data/settings";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  site: settings.site,
  integrations: [sitemap(), mdx()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});
