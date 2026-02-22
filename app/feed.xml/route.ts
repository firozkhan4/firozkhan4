import blogs from "../data/blogs.json";


const baseUrl = "https://firozkhan4.in";

export async function GET() {

  const items = blogs
    .map(
      (blog) => `
    <item>
      <title>${blog.title}</title>
      <link>${`${baseUrl}/blogs/${blog.slug}`}</link>
      <guid>${`${baseUrl}/blogs/${blog.slug}`}</guid>
      <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
      <category>${blog.category}</category>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Firoz Khan</title>
    <description>Blogs on Scalable Architectures, Database Internals, and Distributed Systems.</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <language>en</language>
    <copyright>${new Date().getFullYear()} Firoz Khan</copyright>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
