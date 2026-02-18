import data from "../data/blogs.json";

interface Blog {
  _id: string;
  title: string;
  date: string;
  category: string;
  readingTime: string;
  content: string;
  link?: string;
}

const baseUrl = "https://firozkhan4.in";

export async function GET() {
  const blogs: Blog[] = data;

  const items = blogs
    .map(
      (blog) => `
    <item>
      <title>${blog.title}</title>
      <link>${blog.link ?? `${baseUrl}/blogs/${blog._id}`}</link>
      <guid>${blog.link ?? `${baseUrl}/blogs/${blog._id}`}</guid>
      <pubDate>${new Date(blog.date).toUTCString()}</pubDate>
      <category>${blog.category}</category>
      <description>${blog.content.slice(0, 200)}...</description>
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