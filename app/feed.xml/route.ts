import RSS from "rss"

export async function GET() {

  const feed = new RSS({
    title: 'Firoz Khan | Software Engineer',
    description: "Backend Developer specializing in scalable architectures, database internals, and distributed systems. BCA candidate at Career Point University.",
    site_url: 'https://firozkhan4.vercel.app',
    feed_url: `https://firozkhan4.vercel.app/feed.xml`,
    copyright: `${new Date().getFullYear()} Firoz Khan`,
    language: 'en',
    pubDate: new Date(),
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/atom+xml; charset=utf-8',
    },
  })
}
