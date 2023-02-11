import rss, { pagesGlobToRssItems } from "@astrojs/rss";
export async function get(context) {
  return rss({
    title: "Venenews",
    description: "Crear Para Generar",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./blog/*.{md,mdx}"))
  });
}
