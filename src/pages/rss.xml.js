export async function get(context) {
  const blog = await getCollection("blog");
  return rss({
    title: "Buzz’s Blog",
    description: "A humble Astronaut’s guide to the stars",
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      customData: post.data.customData,
      // Calcula el link RSS desde el `slug` del post
      // Este ejemplo asume que todos los posts son renderizados como rutas `/blog/[slug]`
      link: `/blog/${post.slug}/`
    }))
  });
}
