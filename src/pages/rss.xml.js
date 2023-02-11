import rss from "@astrojs/rss";

export function get(context) {
  return rss({
    // `<title>` campo en el xml generado
    title: "Venenews",
    // `<description>` campo en el xml generado
    description: "Crear Para Generar",
    // Usa el "site" desde el contexto del endpoint
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site,
    // Array de `<item>`s en el xml generado
    // Consulta la sección "Generando `items`" para ejemplos utilizando colecciones de contenido y glob imports
    items: [],
    // (opcional) inyecta xml personalizado
    customData: `<language>en-us</language>`
  });
}
